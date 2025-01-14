import { useState, useEffect } from "react";

const useFetch = (url, landingPageId = "", options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Skip fetch if no URL is provided
    if (!url) return;

    // Function to fetch data
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        // const response = await fetch(url, options);
        const response = await fetch(`${url}/${landingPageId}`, options);
        // const response = await fetch("http://localhost:3000/landing-page/single-landing-page/6780c561a23bd48842199450");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData();

    // Only re-fetch if URL or options change
  }, [url, JSON.stringify(options)]);

  return { data, error, loading };
};

export default useFetch;
