# _{TH-Node.js_Weather_App_CMD_Line}_

#### _{Weather app that returns the current temp for a location.}, {4/3/2017}_

#### By _**{Chris Underwood}**_

## Description

_{The application reads data from the console, sends it off to the Weather Under Ground API, and returns the results to the console.

The application is triggered when a the console is triggered in the proper folder. The app looks for users in process.argv. getWeather starts by initiating a https.get request with the location submitted via interpolation. Each layer of response is added to a body variable. Once the response end code is received the text is parsed into JSON. The message is printed into the console by calling printMessage function and sending in the requested data parameters. Multi-level error handling has been added to the application. Specific layers are to catch a malformed URL before the data is sent to the API, non-JSON response data that cannot be parsed, API urls without protocols, and general catchall errors. Code to give http status code message for more clarity has also been added. }_

## Setup/Installation Requirements

This application runs in Node.js. You will need to have it installed before this program will work for you. This is a good link for installing Node.js on various systems. https://nodejs.org/en/download/package-manager/

Download the files and migrate via the console to the folder you want to run the files from. In the console type node app.js and a zip code or city and state. For example node app.js 97107. If the app runs successfully you will see something that looks like this: Bay City, OR has a temperature of 41.7 F (5.4 C).

## Known Bugs

_{The system runs only on the command line. There is no web interface currently. }_

## Support and contact details

_{cunderwoodmn [at] gmail {dot} com}_

## Technologies Used

_{Node.js, console, vanilla JavaScript(es6), Weather Under Ground API}_

### License

Copyright (c) <2017> <Chris Underwood>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2017 **_{Chris Underwood}_**
