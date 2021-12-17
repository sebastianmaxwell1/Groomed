import React, { Component } from 'react';
import Calendar from './components/calendar';
import Weather from './components/weather';

class App extends Component {
    state = { }
    render() {
        return (
            <>
            <h1>Groomed:</h1>
            <Calendar />
            <Weather />
            
            
            
            </>
        );
    }
}
export default App;