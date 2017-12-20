'use strict';

// Load Express
const express = require('express')

//Create the App
const app = express()

// REVIEWED: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

// Set the Port

app.get('/', function(request,response){
  response.sendFile('index.html', {root:'./public'})
})

app.get('/new', function(request,response){
  response.sendFile('new.html', {root:'./public'})
})

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})



app.listen(PORT, () => {
     console.log(`Listening on port ${PORT}`)
})
