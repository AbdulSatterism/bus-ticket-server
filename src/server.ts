import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer(app);
const io = new Server(server, {
cors:{
  origin:"*",
  methods:["GET","POST"]
}
 });


 io.on("connection", (socket) => {
  console.log("Socket is connected:", socket.id);

  // Example event listener
  socket.on("message", (data) => {
    console.log("Received message:", data);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});


async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}




main();
