const express = require("express");
const { addIncome } = require("../controllers/income");
const router = express.Router()


// router.get('/', (req,res) =>{               //setting routes for backend
//     res.send("hello world")
// })

router.post('/add-income', addIncome)                //setting endpoint for posting and a method comming from controllers

module.exports = router