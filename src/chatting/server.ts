import express from 'express';
import * as socketio from 'socket.io';
import * as path from 'path'

const app = express();
app.set("port", process.env.PORT || 3005);

let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/proto", (req:any, res:any)=>{
    res.sendFile(path.resolve("./client/index.html"));
})

io.on("connection", function(socket:any){
    console.log("a user has been connected");
    socket.on("message", function(message:any){
        console.log(message);
    })
})

const server = http.listen(3005, function(){
    console.log("listening  on *:3005");
})