import React, { useCallback, useEffect, useState } from "react";
import { API } from "../api";
import Nav from "./Nav";
import Photos from "./Photos";
import Search from "./Search";

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

  const searchHandler = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        fetchPhotos();
      }
    },
    [query]
  );

  const categoriesHanlder = (e) => {
    const newQuery = e.target.textContent;
    setQuery(newQuery);
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div data-testid="content-1">
      <Nav onLoad={categoriesHanlder} />
      <Search value={query} onType={changeHandler} onEnter={searchHandler} />
      {loading ? <h1>Loading...</h1> : <Photos data={data} />}
    </div>
  );
}

export default Content;
