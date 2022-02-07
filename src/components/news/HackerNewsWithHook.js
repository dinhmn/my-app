import React, { useState } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";
// import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");

  const { data, setUrl, loading, errorMessage } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );
  return (
    <div className="bg-white mx-auto my-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md  focus:border-blue-400 transition-all"
          placeholder="Typing your keyword ..."
          defaultValue={query}
          // onChange={handleUpdateQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
          on
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-4">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data?.hits.length > 0 &&
          data?.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-5 bg-gray-100 rounded-sm">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
