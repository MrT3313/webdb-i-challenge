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
                const accounts = await Accounts.find()

                console.log(accounts.length)

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
    /* 
    Shape Accepted
    {
        "name": "Reed",
        "budget": 100
    }
    */
    router.post("/", async (req,res) => {
        console.log("accountsRouter POST/")
        console.log(req.body)

        try {
            const newAccount = await Accounts.add(req.body)
            console.log("NEW ACCOUNT: ",newAccount)

            if (newAccount) {
                res.status(201).json(newAccount)
            } else {
                res.status(400).json({ message: "please fit the shape of newAccount"})
            }
        } catch {
            res.status(500).json({ error: "could not add account"})
        }
    })

// - PUT - //
    router.put("/:id", async (req,res) => {
        const { id } = req.params

        try {
            const editAccount = await Accounts.update(id, req.body)
            if (editAccount) {
                res.status(200).json(editAccount)
            } else {
                res.status(401).json({error: "could not update account: invalid ID"})
            }
        } catch {
            res.status(500).json({ error: "could not update account"})
        }
    })

// - DELETE - //
    router.delete("/:id", async (req, res) => {
        const { id } = req.params
        console.log("accountsRounter DELETE/:id")

        try {
            const deletedAccount = await Accounts.remove(id)
            if (deletedAccount) {
                res.status(204).json(deletedAccount)
            } else {
                res.status(400).json({ error: "could not delete individual account. invalid ID"})
            }
        } catch {
            res.status(500).json({ error: "could not delete account"})
        }
    })
// EXPORTS
    module.exports = router