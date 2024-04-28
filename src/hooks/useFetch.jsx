import { useEffect,useState } from "react";
import {fetchDataFromApi} from "../utils/api";

const useFetch = ((url)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(null);
    const [error,seterror]= useState(null);

    useEffect(()=>{
        setLoading('...Loading');
        setData(null);
        seterror(null);

        fetchDataFromApi(url).then((res)=>{
            setLoading(false);
            setData(res);
            
            
        })
        .catch((error)=>{
            setLoading(false);
            seterror('Somthing went wrong!')
        })
        
    },[url]);

    return {data,loading,error};
});

export default useFetch;