import { useState, useEffect } from "react";
import Axios from "axios";

const initialOptions = {
  method: "GET", // GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors,cors, same-origin
  cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include,same-origin, omit
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: "follow", // manual, follow, error
  referrerPolicy: "no-referrer", // no-referrer,no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  // body: JSON.stringify(data) // body data type must match "Content-Type" header
};

export default function useAxios(url, options = initialOptions) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    // const source = Axios.caller
    const getData = async () => {
      try {
        setLoading(true);
        const res = await Axios.get(url, { cancelToken: source.token });
        setResponse(res);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      source.cancel();
    };
  }, [url]);
  return [response, error, loading];
}

// export default function useAxios(url){
//     const [response, setResponse] = useState(null)
//     useEffect(() => {
//         const getData = async () => {
//             const res = await Axios.get(url);
//             setResponse(res.data);
//         }
//         getData();
//     }, []);
//     return [response];
// }
