import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setTimeout(() => {
        if (isMounted.current) {
          setHits(response.data?.hits || []);
          setLoading(false);
        }
      }, 3000);
      // console.log(response.data.hits);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div className="w-2/4 p-5 mx-auto my-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword ..."
          defaultValue={query}
          onChange={handleUpdateQuery}
          // onChange={(e) => setQuery(e.target.value)}
        />
        <button className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md">
          Fetching
        </button>
      </div>
      {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="my-4 text-red-400">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 key={item.title} className="p-5 bg-gray-100 rounded-sm">
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
