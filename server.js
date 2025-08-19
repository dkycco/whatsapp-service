const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');
const webRoutes = require('./routes/web');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.set('io', io);
app.use('/', webRoutes);

server.listen(3010, () => {
    console.log(`Server running on port 3010`);
});