// IMPORTS
    const express = require('express');

// -- ROUTERS -- //
    const accountsRouter = require('./api/accountsRouter')

// SERVER
    const server = express();
    server.use(express.json())

// Homepage Routing
    server.get('/', (req, res) => {
        res.json({ message: "WEB DataBase 1 Challenge -- WOOOO HOOOO"})
    });
// Individual Routes
    server.use('/api/accounts', accountsRouter)


module.exports = server;