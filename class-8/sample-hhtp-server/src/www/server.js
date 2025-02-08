// To boostrap every content
const express = require('express');

// To create server
const { createServer } = require('http');

// DEFINING THE SERVER BEING USED
const app = express();
const server = createServer( app );

// Defining Middleware
app.use( express.json() );
app.use( express.urlencoded( {extended: true} ) );

// EXPORTING THE MIDDLEWARE
module.exports = { app, server};
module