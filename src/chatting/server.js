const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io').listen(server)

var connections = []

app.use(express.static(__dirname + '/../../build'))

io.on('connection', (socket) => {
    connections.push(socket.id)
    console.log("socket ID - " + socket.id)
    console.log("connected: %s sockets connected",connections.length)

    socket.on('disconnect', ()=> {
        connections.splice(connections.indexOf(socket.id),1)
        console.log('connected: %s sockets connected', connections.length)
    })

    socket.on('send message', (data) => {
        io.sockets.emit('new message', data);
    })
})

const PORT = process.env.PORT || 6969

server.listen(PORT, () => {
    console.log("connected to port " + PORT)
})