import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let users = []; // [{ id, name }]
let messages = []; // [{ user, text, time }]

io.on("connection", (socket) => {
  console.log(" An user connected");

  // Handle registration
  socket.on("register", (name) => {
    socket.username = name;
    users.push({ id: socket.id, name });
    io.emit("updateUsers", users);
    socket.emit("chatHistory", messages);
    io.emit("userJoined", `${name} joined the chat`);
  });

  // Handle message sending
  socket.on("chatMessage", (msg) => {
    const message = {
      user: socket.username,
      text: msg,
      time: new Date().toLocaleTimeString(),
    };
    messages.push(message);
    io.emit("chatMessage", message);
  });

  // Admin broadcast
  socket.on("adminMessage", (msg) => {
    if (socket.username === "admin") {
      io.emit("adminMessage", { text: msg, time: new Date().toLocaleTimeString() });
    } else {
      socket.emit("errorMsg", "Only admin can send announcements");
    }
  });

  // Manual disconnect
  socket.on("manualDisconnect", () => {
    socket.disconnect(true);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    users = users.filter((u) => u.id !== socket.id);
    io.emit("updateUsers", users);
    io.emit("userLeft", `${socket.username} left the chat`);
    console.log("User disconnected");
  });
});

server.listen(3000, () => console.log("listening..."));
