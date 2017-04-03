const http = require('http');
const APIkey  = '4cc26b519f31b12f';

function printMessage(city, temperature) {
	const message = `${city} has a temperature of ${temperature}`;
	console.log(message);
}


function getWeather(location) {
	const request = http.get(`http://api.wunderground.com/api/${APIkey}/conditions/q/${location}.json`, 
		(response) => {
			 let body = "";
	         response.on('data', (chunk) => {
	           body += chunk;	
	        });
	         response.on('end', () => {
	         	const cityTemp = JSON.parse(body);
	         	printMessage(cityTemp.current_observation.display_location.full, cityTemp.current_observation.temperature_string);
	         });
		}).on('error', (error) => {
			  console.error(error.message);
		});
}


const location = process.argv.slice(2).join("_").replace(' ', '_');
getWeather(location);