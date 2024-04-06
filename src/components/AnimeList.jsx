/* eslint-disable react/prop-types */
import { useState } from "react";
import AnimeInfo from "./AnimeInfo";
import { Route, Routes } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";

const AnimeList = ({ list, setQuery }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    if (e.key === "Enter") {
      setQuery(search);
    }
  };

  return (
    <div className="anime-list">
      <Routes>
        <Route
          path="/"
          element={
            <>
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
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Genre(s)</th>
                    <th>Popularity</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {list &&
                    list.map((anime, idx) => (
                      <AnimeInfo key={idx} anime={anime} num={idx} />
                    ))}
                </tbody>
              </table>
            </>
          }
        />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
    </div>
  );
};

export default AnimeList;
