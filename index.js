const express = require("express");
const dotenv = require("dotenv");
const http = require("http");

const server = express();
const PORT = process.env.PORT || 3009;

dotenv.config({ path: "./config.env" });

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(PORT, () => console.log(`Server is listen on ${PORT}`));
