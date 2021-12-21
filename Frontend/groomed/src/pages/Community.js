import React, {Component} from 'react';
import '../app.css';
import Wall from '../components/Wall';

import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';


class Community extends Component {
    state = {
        user: JSON.parse(localStorage.getItem('user')),
        login_errors: null,
        signup_errors: null
    }

    handle_login = (e, data) => {
        console.log(data);
        e.preventDefault();
        fetch('http://localhost:8000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response){
            if(response.ok) {
                return response.json();
            }
            throw new Error('Invalid username or password');
        })
        .then(json => {
            console.log(json);
            localStorage.setItem('token', json.token);
            localStorage.setItem('user', JSON.stringify(json.user));
            this.setState({
                logged_in: true,
                user: json.user,
                isTokenValidated: true,
                login_errors: null
            });
        }).catch(error => {
            this.setState({
                logged_in: false,
                login_errors: error.message
            });
            return Promise.reject();
        });
    };

    handle_signup = (e, data) => {
        console.log(data);
        e.preventDefault();
        if(data.password1 === data.password2){
            data.password = data.password1;
            fetch('http://localhost:8000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(response.ok) {
                    response.json().then(json => {//-- logged_in was true, put false instead
                        this.setState({
                            logged_in: false,
                            user: null
                        })
                    });
                }else{
                     response.json().then(json => {
                        this.setState({
                            logged_in: false,
                            user: null,
                            signup_errors: json.err.message
                        });
                        return Promise.reject();
                    });
                }
            });
        }else{
            console.log('passno matcn');
            this.setState({
                logged_in: false,
                 signup_errors: "Passwords don't match"
            });
        }
    };

    handle_logout = () => {
        localStorage.clear('token');
        localStorage.clear('user');
        window.location = '/login';
    }

    constructor(props){
        super(props);
        let token = localStorage.getItem('token');
        this.state.isTokenValidated =  () => {
            let token = localStorage.getItem('token');
            if(token){
                fetch('http://localhost:8000/users/checkJWTtoken', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token
                    }
                })
                .then((resp) => resp.json())
                .then((json) => {
                    console.log('token valid');
                    console.log(json);
                    return json;
                });
            }else{
                return false;
            }
        }
        console.log(this.state.isTokenValidated);
    }

    componentDidMount(){
        console.log(this.state.user);

    }

 render (){
        console.log(this.state.isTokenValidated);

        return (

                   <Wall /> 


        )
    }

}

export default Community;