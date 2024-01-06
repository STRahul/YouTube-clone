import { useEffect, useState } from "react";

const useGetData = (url)=> {
    const  [data, setData] = useState([])

    useEffect(()=>{
        getData();
    })
    async function getData(){
        const response = await fetch(url);
        const data = await response.json();
        setData(data?.items);
      }

      return { data }
}

export default useGetData;