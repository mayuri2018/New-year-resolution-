import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Resolution from "../../types/type";

type InitialState = {
    resolutionList: Resolution[];
};

const initialState: InitialState = {
    resolutionList:[],
};

const resolutionSlice = createSlice({
    name:"resolution",
    initialState,
    reducers:{
        addResolution:(state, action:PayloadAction<Resolution>)=>{
        state.resolutionList.push(action.payload);
        },
// delete resolution
        removeResolution : (state, action)=>{
        const result = state.resolutionList.filter((item)=>item.title !== action.payload.title);
            state.resolutionList = result;
        }
    },
});

export const resolutionActions = resolutionSlice.actions;
const reducer = resolutionSlice.reducer;
export default reducer;