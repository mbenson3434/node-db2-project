const express = require("express");
const carsRouter = require("./cars/cars-router");


const server = express();

server.use(express.json());
server.use("/cars", carsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

module.exports = server;