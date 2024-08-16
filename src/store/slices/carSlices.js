import { createSlice,nanoid } from "@reduxjs/toolkit";

const carSlices = createSlice({
    name:"cars",
    initialState:{
        searchTerm:"",
        data:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        addCar(state,action){
         state.data.push({
            name:action.payload.name,
            cost:action.payload.cost,
            id:nanoid() //generate id nanoid
         })
         
        },
        removeCar(state,action){
         const updated = state.data.filter((car)=>{
            return car.id !== action.payload
         })
         state.data = updated
         console.log('updated',updated,'what is action payload',action.payload)
        }
    }

})

export const { changeSearchTerm,addCar,removeCar}=carSlices.actions
export const carReducer = carSlices.reducer