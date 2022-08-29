import React, { useState, useEffect } from "react";
import "./SearchStyles.css";
import { useDispatch } from "react-redux";
import { Cari, getMovies } from "../../store/action";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      dispatch(Cari(search));
    } else {
      dispatch(getMovies());
    }
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Search Movies Name"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Search;
