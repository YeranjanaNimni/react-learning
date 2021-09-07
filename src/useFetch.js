import { useState, useEffect } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        const abortCont = new AbortController();

        // setTimeout (()=>{
             fetch(url, {signal: abortCont.signal})
         .then((res)=>{
             if (!res.ok){      
                 throw Error("failed to fetch");
             }
             return res.json()
         })
         .then(data =>{
             console.log(data);
             setData(data)
             setIsLoading(false)
         })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
        // }, 1000)
        return ()=> abortCont.abort();
     }, [url])

     return {data, isLoading}
}

export default useFetch;