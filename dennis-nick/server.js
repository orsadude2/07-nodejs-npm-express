'use strict';

// Load Express
const express = require('express')

//Create the App
const app = express()

// REVIEWED: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

// Set the Port

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'))

app.get('/new', (request, response) => response.sendFile('new.html', {root: './public'}));

app.get('/admin', (request, response) => response.sendFile('admin.html', {root: './public'}));

app.post('/articles', (request, response) => {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send(request.body);
})

app.use((request, response) => response.status(404).sendFile('404.html', {root: './public'}))

app.listen(PORT, () => {
     console.log(`Listening on port ${PORT}`)
})
