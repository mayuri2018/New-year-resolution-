import React,{useState} from "react";
import { Button, Typography } from "@mui/material";
import {Box} from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Resolution from "../../types/type";
import {resolutionActions} from "../../redux/slice/resolution"
import { favActions } from "../../redux/slice/favoriteResolution";
import { RootState } from "../../redux/store";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";

type Prop = {
    item:Resolution;
};

export default function ResolutionItem({item }:Prop){
    const dispatch = useDispatch();
    const [open, setOpen]=useState(false);
    const handleClose = (
        event? : React.SyntheticEvent | Event,
        reason ? : string
    )=>{
        if (reason === "clickaway"){
            return;
        }
        setOpen(false);
    };

    // fav List
    const FavList = useSelector((state:RootState)=>state.favorite.favList);
    
    const [isValid, setIsValid]= useState(false);

    function validateItem(){
        const isDuplicated = FavList.some(
            (FavItem)=>
            FavItem.title.toLocaleLowerCase()=== item.title.toLocaleLowerCase()
        );
    
        if (isDuplicated){
            //show warning
           setIsValid(false);
           setOpen(true);
           return;
        } 
        setIsValid(true);
        dispatch(favActions.addFavResolution(item))
    }

    function removeResolutionHandler (){
        dispatch(resolutionActions.removeResolution(item));
    }

    return(
        <Box>
            <h3>Resolutions</h3>
            <Typography>{item.title}</Typography>
            <Typography>{item.date?.toDate().getFullYear()}</Typography>
            <Button onClick={removeResolutionHandler}>Delete</Button>
            <Button onClick={validateItem}>Add to Favorite</Button>
            {!isValid && (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity = "error" onClose={handleClose} sx={{ width: '100%' }}>
                    This item is already exit
                </Alert>
            </Snackbar>
            )}
            
        </Box>
    )
}