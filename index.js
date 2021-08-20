const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3009;

dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("chat message", (msg) => {
    io.emit('chat message', msg);
  });
  socket.on("disconnect", () => console.log("a user has been disconnected"));
});

server.listen(PORT, () => console.log(`Server is listen on ${PORT}`));
