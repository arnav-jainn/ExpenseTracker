const IncomeSchema = require("../models/IncomeModel")

 

exports.addIncome = async(req, res) => {
    const {title,amount,category,description,date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        
    } catch (error) {
        
    }

    console.log(income)
}