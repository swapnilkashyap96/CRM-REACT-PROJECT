import { createSlice } from "@reduxjs/toolkit"





const initialState={
    taskHeading:'Dashboard'
}

const headerHeadingSlice=createSlice({
    name:'headerHeading',
    initialState,
    reducers:{
        setTaskHeading:(state,action)=>{
            state.taskHeading=action.payload
        }
    }
})

export const {
    
    setTaskHeading

}=headerHeadingSlice.actions

export default headerHeadingSlice.reducer

