import React from "react";
import{useSelector} from "react-redux";
import { RootState } from "../../redux/store";
import ResolutionItem from "./ResolutionItem";

export default function ResolutionList(){
    const list = useSelector(
        (state:RootState)=> state.resolution.resolutionList
    );

    return(
        <div>
            <h1>ResolutionList</h1>
            {list.map((item)=>(
            <ResolutionItem key={crypto.randomUUID()} item={item} />
            ))}
        </div>
    )
}