import { useEffect, useState } from "react";
import { axiosInstance } from "../api/client";

export function useQuery({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        // fetch
        const { data } = await axiosInstance().get(url);
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
