import { useEffect, useState } from "react";


const useFetch = (url) => {


    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(true);    
    const [error,setError] = useState(null);
  
    useEffect(() => {
        const abortController = new AbortController();

      setTimeout(() => {
        fetch(url,{signal:abortController.signal})
  
        .then(resp=>{
         if(!resp.ok){
          throw Error("CAN'T LOAD DATA FROM THIS RESOURCE")
         }
         
          return resp.json();
        })
        .then(data=>{
          setData(data)
          setLoading(false)
          setError(null)
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                
            }
          else{
            setError(err.message);  
          setLoading(false);
          }  
                
        })
      },1000);
        
      return ()=>{
        abortController.abort();
      }
    }, [url])
  
    return {data,loading,error}



}

export default useFetch;