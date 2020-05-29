const express=require("express");
const cors = require('cors');
const drugRouter=require("./api/routes/drug");
const pharmacyRouter=require("./api/routes/pharmacy");

let app=express();

app.use(cors());
app.use(express.json());

//app.use('/', (req,resp,next) => resp.status(200).send("<h1>hello<h1>"));
app.use('/drugs',drugRouter);
app.use('/pharmacies',pharmacyRouter);

module.exports = app;