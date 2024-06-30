"use client"
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useRef, useState } from 'react';
import langs from "../constants/langs";
import { memo } from "react";

const Language_Select = memo(function Language_Select({props_for_select,lang_change}){
    console.log("%%%%%%%%%%%%%% Language Rerendering %%%%%%%%%%%%%%%%%%%%%%5")
    let [code_language, set_code_language] = useState("PYTHON3_8");
    let sel = useRef(null);

    // console.log(code_language);

    function handle_lang_change(event){
        // console.log("prev language is ", code_language)
        // console.log("setting language as ", event.target.value)
        set_code_language(()=>event.target.value)
        lang_change(event.target.value);
        // console.log('event is ', event)
      }
    // lang_change("PYTHON3_8")
  return (
    <Box >
      {/* sx={{height: 40}} */}
    <FormControl size = "small">
      {/* <InputLabel id="demo-simple-select-label">Language</InputLabel> */}
      {/* <ClickAwayListener></ClickAwayListener> */}
      <Select 
       sx={{height: 30,width: 130,color:"grey"}}
      {...props_for_select}
      ref = {sel}
        defaultValue="Python 3.8"
        id="demo-simple-select"
        value={code_language}
     
        onClose={() => {
          sel.current.classList.remove('Mui-focused');
          sel.current.previousSibling?.classList.remove('Mui-focused');
         }}
        onOpen={() => {
          sel.current.classList?.add('Mui-focused');
            sel.current.previousSibling?.classList.add('Mui-focused');
          }}

        onChange={
          // (event)=>{
          handle_lang_change
          // (event)
          // console.log('event is ', event)
        // }
      }
      >
      {
        langs.map((obj)=>{return (<MenuItem key={obj.language_argument} value={obj.language_argument}>{obj.language}</MenuItem>
        )})
      }
      </Select>
    </FormControl>
  </Box>
  )
})

export default Language_Select
