const express = require('express');
const mongoose = require('mongoose');
const app = require("./app");

require('dotenv').config();
const port = process.env.PORT || 3000;


const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});