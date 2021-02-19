import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchRouteData = async () => {
      try {
        await axios.get(url, { cancelToken: source.token }).then((res) => {
          setData(res.data);
        });
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };
    fetchRouteData();

    return () => {
      source.cancel();
    };
  }, []);

  return { data };
};

export default useFetch;
