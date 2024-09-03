// done to import backend into the frontend

import React, { useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5001/api/v1";


const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [incomes,setIncomes] = useState([]);
    const [expense,setExpense] = useState([]);
    const [error,serError] = useState(null);

    const addIncome = async (income) =>{                    //this will send the items to the data base
        const response = await axios.post(`${BASE_URL}add-income`,income)         //add-income is the endpoint 
            .catch((err)=>{
                setError(err.response.data.message)
            })
    }           

    return(
        <GlobalContext.Provider value = {{addIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}