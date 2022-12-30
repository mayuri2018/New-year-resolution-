import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FavItem from "./FavItem";

export default function FavList (){
    const list = useSelector(
        (state: RootState)=> state.favorite.favList
    );
    return(
        <div>FavList
            {list.map((item)=>
            <FavItem item={item}/>)}
        </div>
    )
}