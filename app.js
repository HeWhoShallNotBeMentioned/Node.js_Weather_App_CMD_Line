const http = require('http');
const APIkey  = '4cc26b519f31b12f';


function getWeather(location) {
	const request = http.get(`http://api.wunderground.com/api/${APIkey}/conditions/q/${location}.json`, 
		(response) => {
			 let body = "";
	         response.on('data', (chunk) => {
	           body += chunk;	
	        });
	         response.on('end', () => {
	         	console.log(body);
	         });
		}).on('error', (error) => {
			  console.error(error.message);
		});
}


const location = process.argv.slice(2).join("_").replace(' ', '_');
getWeather(location);