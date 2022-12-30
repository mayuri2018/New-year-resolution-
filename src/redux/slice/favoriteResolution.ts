import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Resolution from "../../types/type";

type InitialState = {
    favList: Resolution[];
};

const initialState: InitialState = {
   favList:[],
};

const favResolutionSlice = createSlice({
    name:"favResolution",
    initialState,
    reducers:{
        addFavResolution:(state, action:PayloadAction<Resolution>)=>{
        state.favList.push(action.payload);
        },
    },
});

export const favActions = favResolutionSlice.actions;
const reducer = favResolutionSlice.reducer;
export default reducer;