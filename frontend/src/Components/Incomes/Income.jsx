import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext.jsX'

const Income = () => {

  const {addIncome} = useGlobalContext();

  return (
    <IncomeStyle>
        <Inner>
          <h1>Incomes</h1>
          <div className="income-content">
            <div className="form-container">

            </div>
            <div className="incomes">
              
            </div>
          </div>
        </Inner>
    </IncomeStyle>
  )
}

export default Income

const IncomeStyle = styled.div`
  

`
const Inner = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
`