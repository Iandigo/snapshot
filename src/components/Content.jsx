import React, { useEffect, useState } from "react";
import { API } from "../api";
import Nav from "./Nav";
import Photos from "./Photos";

function Content() {
  const [query, setQuery] = useState("cars");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    setLoading(true);
    await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: API,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data.photos);
      });
  };

  useEffect(() => {
    const timerType = setTimeout(() => {
      fetchPhotos();
    }, 1000);

    return () => clearTimeout(timerType);
  }, [query]);

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      fetchPhotos();
    }
  };

  const categoriesHanlder = (e) => {
    const newQuery = e.target.textContent;
    setQuery(newQuery);
  };

  return (
    <div data-testid="content-1">
      <Nav onLoad={categoriesHanlder} />
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={searchHandler}
        />
      </div>

      {loading ? <h1>Loading...</h1> : <Photos data={data} />}
    </div>
  );
}

export default Content;
