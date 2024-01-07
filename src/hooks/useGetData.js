import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const useGetData = (url, dependency) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    getData().catch(err=> err.json()).then(res=>setError(res));;
  }, [dependency]);
  async function getData() {
    const response = await fetch(url);
    if(!response.ok){
      throw json({message: 'Could not fetch data.'},{status: 500})
     }
    const data = await response.json();
    setData(data?.items);
  }

  return { data,error };
};

export default useGetData;
