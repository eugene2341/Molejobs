// This will read the .env file, parse the contents, 
// assign it to process.env, and make it accessible throughout the app
require("dotenv").config();

const express = require("express");
const app = express(); // sets up server with al features and utilities provided by express
const port = process.env.PORT || 3001; // sets port to 3000 if not specified in .env file

const testPostgresConnection = require("./controllers/testPostgresConnection");

// when get req made, res back hello world
app.get("/", (req, res) => {
    res.send("Hello World!");
});

testPostgresConnection(app);

const dbConfig = require("./config/postgreConfig");
console.log(`User ${dbConfig.user} is logged in`)

app.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
});