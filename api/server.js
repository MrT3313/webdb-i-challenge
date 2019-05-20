// IMPORTS
    const express = require('express');

// -- ROUTERS -- //
    const accountsRouter = require('./accountsRouter')

// SERVER
    const server = express();
    server.use(express.json())

// Homepage Routing
    server.get('/', (req, res) => {
        res.json({ message: "Sprint Prep"})
    });
// Individual Routes
    server.use('/api/accounts', accountsRouter)


module.exports = server;