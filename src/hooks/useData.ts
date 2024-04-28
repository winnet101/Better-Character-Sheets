import { useEffect, useState } from "react";
import { typedJson } from "../utils";

export default function useData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let ignore = false;
    async function fetchData(fetchUrl: string) {
      setIsLoading(true);
      try {
        const res = await fetch(fetchUrl);
        const data = await typedJson<T>(res);
        if (!ignore) {
          setData(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setHasError(true);
      }
    }

    fetchData(url);

    return () => {
      ignore = true;
      setIsLoading(false)
    };
  }, [url]);

  return { data, isLoading, hasError };
}
