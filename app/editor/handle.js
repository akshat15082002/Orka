"use server"

import getresults from "./getresults";

//todo: make it server functions
export default async function handle(passed,lang){
  return new Promise (async (resolve,reject)=>{
    let response;
    let GET_URL;
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const POST_URL = process.env.POST_URL
    console.log('button clicked\n');
    console.log("passed string is ", passed);
    console.log("passed lang is ", lang);
    console.log("post url is ", POST_URL);
    const data = {    
      'source': passed,
      'lang': lang,
      'time_limit': 5,
      'memory_limit': 246323
    };
    //todo: validate data? no need as provided inputs on the front end  
    try {
      response = await fetch(POST_URL, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "client-secret": CLIENT_SECRET
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
      GET_URL = result.status_update_url;
      console.log('Get url is now ',GET_URL,"\n");

      // getresults(GET_URL);
      let ans =  await getresults(GET_URL);
      console.log("ans is ", ans);
      return resolve(ans);

    } catch (error) {
      console.error("Error:", error);
      return resolve({type:"Failure",content:"Try Again some error occure"})
    }
})
}