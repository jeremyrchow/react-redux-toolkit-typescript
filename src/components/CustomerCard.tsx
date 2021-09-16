import React from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer, removeCustomer } from '../features/customerSlice'
import {useState} from "react"
interface CustomerCardType {
  id: string;
  name: string;
  food: string[]
}
export default function CustomerCard({id,name,food} : CustomerCardType) {
  const dispatch = useDispatch()
  const [customerFoodInput, setCustomerFoodInput] = useState("")
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <br />
      <button onClick={
        () => {
          dispatch(removeCustomer({
            id,
            name,
            food
          }))
        }
      }> Delete </button>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map(food => {
            return <p>{food}</p>
          })}
        </div>
        <div className="customer-food-input-container">
          <input 
            value  = {customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}  
          />
          <button
            onClick={() => {
              if(!customerFoodInput) return
              dispatch(addFoodToCustomer({
                id,
                food: customerFoodInput
              }))
            }}>Add</button>
            
        </div>
      </div>
    </div>
  )
}
