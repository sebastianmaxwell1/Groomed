import React from 'react';
import axios from "axios";


const SportsScores = () => {


const options = {
  method: 'GET',
  url: 'https://sportscore1.p.rapidapi.com/events/live',
  params: {page: '1'},
  headers: {
    'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
    'x-rapidapi-key': '9ddc1a5318msh349c6554b6dc238p104169jsn10576dcf4cd7'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

return (
    <SportsScores />
)

}

export default SportsScores;