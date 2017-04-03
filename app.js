const http = require('http');



function printMessage(city, temperature) {
	const message = `${city} has a temperature of ${temperature}`;
	console.log(message);
}

function printError(error) {
	console.error(error.message);
}


function getWeather(location) {
	const APIkey  = '4cc26b519f31b12f';
	const readableQuery = location.replace('_', ' ');
	//error handeling in case the url is malformed
	try {
	const request = http.get(`http://api.wunderground.com/api/${APIkey}/conditions/q/${location}.json`, 
		(response) => {
			if (response.statusCode === 200) {
				 let body = "";
		         response.on('data', (chunk) => {
		           body += chunk;	
		        });
		         response.on('end', () => {
		         	try {
		         		const cityTemp = JSON.parse(body);
		         		if (cityTemp.current_observation) {
		         			printMessage(cityTemp.current_observation.display_location.full, cityTemp.current_observation.temperature_string);
		         		} else {
		         			//error for isf the location is not found
		         			const queryError = new Error(`The location "${readableQuery}" was not found.`);
		         			printError(queryError);
		         		}	
		         	} catch (error){
		         		//Parse error
		         		printError(error);
		         	}
		         });
		     }
		    else {
		    	//statusCode Error
		    	const statusCodeError = new Error (`There was an error getting the message for ${readableQuery}.
		    	(${http.STATUS_CODES[response.statusCode]})`);
		    	
		    	printError(statusCodeError);
		    }
		}).on('error', (error) => {
			  console.error(error.message);
		});
	} catch (error) {
		//malformed URL error
		printError(error);
	}	
}


const location = process.argv.slice(2).join("_").replace(' ', '_');
getWeather(location);