// IMPORTS
    const express = require('express');

// Importing Models for DB
    const Accounts = require('../data/accounts-model');

// Router
    const router = express.Router();

// - GET - //
    router.get("/", async (req, res) => {
        console.log("accountsRouter GET/ ")
        try {
            const accounts = await Accounts.get()
            res.status(200).json(accounts)
        } catch {
            res.status(500).json({ error: "Could not get accounts"})
        }
    })
// - POST - //
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router