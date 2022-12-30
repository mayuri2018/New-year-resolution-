import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, {Dayjs} from "dayjs";
import { useDispatch } from "react-redux";
import Resolution from "../../types/type";
import { resolutionActions } from "../../redux/slice/resolution";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";

export default function ResolutionForm(){
  
// user input
const [userInput, setUserInput]=useState<Resolution>({
    title:"",
    date:dayjs(Date.now()),
});

//get data from the form
function handlerTitleValue(event: React.ChangeEvent<HTMLInputElement>){
    setUserInput({...userInput, title: event.target.value });
}

//date
function handlerDateValue(newValue: Dayjs | null){
    setUserInput({...userInput, date:newValue});
}

//dispatch the action
const dispatch = useDispatch();
    function submitResolution(){
        dispatch(resolutionActions.addResolution(userInput));
        handleClick();
        setUserInput({...userInput, title:""});
    }

//message
const [open, setOpen]=useState(false);
const handleClose=(
    event?:React.SyntheticEvent| Event,
    reason?:string
)=>{
        if(reason==="clickaway"){
            return;
        }
        setOpen(false);
    };
    const handleClick = ()=>{
        setOpen(true);
    };
    
    return(
     <div>
        <h1>Resolution Form</h1>
        <TextField 
        id="standard-basic" 
        label="Standard" 
        variant="standard"
        onChange={handlerTitleValue}
        value={userInput.title}
         />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={userInput.date}
          onChange={handlerDateValue}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <Button variant="outlined" onClick = {submitResolution}>
            Add
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                A resolution is added
            </Alert>
        </Snackbar>
        
    </div>
    );
}