import React from "react";
import Resolution from "../../types/type";

type Prop = {
    item: Resolution;
}
export default function FavItem({item}:Prop){
    return(
        <div>
            FavItem
            <p>{item.title}</p>
            <p>{item.date?.toDate().getFullYear()}</p>
        </div>
    )
}