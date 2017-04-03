const https = require('https');
const APIkey  = 4cc26b519f31b12f;


function getWeather(location) {
	const request = https.get(`http://api.wunderground.com/api/${APIkey}conditions/q/OR/Bay_City.json`, (response)



}