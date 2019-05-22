// IMPORTS
    const express = require('express');

// Importing Models for DB
    const Accounts = require('../data/accounts-model');

// Router
    const router = express.Router();

// - GET - //
// ????
    router.get("/", async (req, res) => {
        // V1
            console.log("accountsRouter GET/ ")
            // res.status(200).json({ message: "Routed accountsRouter main GET/ !"})
        // V2
            try {
                const accounts = await Accounts.find('SELECT * FROM accounts')
                res.status(200).json(accounts)
            } catch {
                res.status(500).json({ error: "could not get all accounts"})
            }
    })
// Find By ID
    router.get("/:id", async (req,res) => {
        console.log("accountsRouter GET/:id ")
        const { id } = req.params
        console.log(id)
        try {
            console.log(account)
            const account = await Accounts.findById(id)
            if (account) {
                console.log(account)
                res.status(200).json(account)
            } else {
                res.status(404).json({ error: "ID Not Found"})
            }
            
        } catch {
            res.status(500).json({ error: "could not get individual account"})
        }
    })
// - POST - //


// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router