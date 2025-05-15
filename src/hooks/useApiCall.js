import { useEffect, useState } from "react";

export function useApiCall(fetchFunction) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function fetchData() {
    try {
      console.log("fetching");
      setLoading(true);
      const res = await fetchFunction();
      setData(res);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
}
