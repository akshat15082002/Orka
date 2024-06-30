"use client"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';


const Result_section = ({result,type,res}) => {
  const [result_open,set_result_open] = useState(res);
  useEffect(() => {
    console.log("processing res");
    set_result_open(res);
  }, [res])
  
  
  console.log("rerendering result section");
  console.log("res is ", res);
  console.log("result is ", result);
  console.log("type is ", type);

  

    console.log("result_open is ", result_open);
    console.log("result is ",result);
    console.log("type is ",type);

  return (
  <div style={{backgroundColor:"white", height:"100%",color:"black"}}>
    <div style={{padding:"5px",display:"flex",backgroundColor:"#f2f2ed",border:"1px solid grey", borderTop:"none"}}>
    <Button
          size="small"
          color="secondary"
          component="button"
          variant="text"
          onClick={(e) => {
            set_result_open(false);
          }}
        >
          <b>
          TESTS
          </b>
    </Button>
    <Button
          size="small"
          color="secondary"
          component="button"
          variant="text"
          onClick={(e) => {
            set_result_open(true);
          }}
        >
          <b>
          RESULTS
          </b>
    </Button>
    </div>
    <div style={{padding:"5px",height:"100%"}}>
    {result_open && <>{result}</>}
    {!result_open && <>test_case_page</>}
    </div>
  </div>
  )
}
export default Result_section
