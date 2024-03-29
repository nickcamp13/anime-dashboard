/* eslint-disable react/prop-types */
import { useState } from "react";
import AnimeInfo from "./AnimeInfo";

const AnimeList = ({ list, setQuery }) => {
  const [search, setSearch] = useState("search");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    if (e.key === 'Enter') {
      setQuery(search);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        onKeyDown={updateQuery}
        placeholder="Search Anime..."
      />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Genre(s)</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((anime, idx) => <AnimeInfo key={idx} anime={anime} />)}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeList;
