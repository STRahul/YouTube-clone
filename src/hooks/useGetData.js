import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const useGetData = (url, dependency) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    getData().catch(err => {
      if (err.body) { return err?.json() }
      return err
    })
      .then(res => setError(res)).catch(er => setError(er));;

    async function getData() {
      const response = await fetch(url);
      if (!response.ok) {
        const err = await response.json();
        throw json({ message: err?.error?.message || 'Could not fetch data.' }, { status: 500 })
      }
      const data = await response.json();
      setData(data?.items);
    }
  }, [dependency, url]);


  return { data, error };
};

export default useGetData;
