import React, { useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5001/api/v1";


const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [incomes,setIncomes] = useState([]);
    const [expense,setExpense] = useState([]);
    const [error,serError] = useState(null);

    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-income`,income)         //add-income is the endpoint 
            .catch((err)=>{
                setError(err.response.data.message)
            })
    }           

    return(
        <GlobalContext.Provider value = {{
            addIncome,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}