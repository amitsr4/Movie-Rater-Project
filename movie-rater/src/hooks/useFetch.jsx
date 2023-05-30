import { useState, useEffect } from "react";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

//just try another way to fetch data by creating a custom hook
function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);
  const [token] = useCookies(["movie-token"]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const data = await API.getMovies(token["movie-token"]).catch((err) =>
        setError(err)
      );
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return [data, loading, error];
}

export { useFetch };
