import { useEffect, useState } from "react";
import AnimeList from "./components/AnimeList";
import StatisticCard from "./components/StatisticCard";
import "./App.css";

function App() {
  const [anime, setAnime] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getAnime = async () => {
      let response = null;
      if (query === "") {
        response = await fetch(
          `https://api.jikan.moe/v4/anime?sfw=true&limit=10`
        );
      } else {
        response = await fetch(
          `https://api.jikan.moe/v4/anime?sfw=true&q=${query}&limit=10`
        );
      }
      const json = await response.json();
      setAnime(json.data);
    };

    getAnime().catch(console.error);
  }, [query]);

  const getMostPopular = () => {};

  const getMostFrequentGenre = () => {};

  const getTop100 = () => {};

  return (
    <div>
      <div id="sidebar">
        <header>Anime Dashboard</header>
        <nav>
          <li>Dashboard</li>
          <li>Search</li>
          <li>About</li>
        </nav>
      </div>
      <main>
        <div className="statistics">
          {/* <StatisticCard list={anime} statistic="Most Popular"/>
          <StatisticCard
            statistic="Most Frequent Genre"
            method={getMostFrequentGenre}
          />
          <StatisticCard statistic="Top 100" method={getTop100} /> */}
        </div>
        <AnimeList list={anime} setQuery={setQuery} />
      </main>
    </div>
  );
}

export default App;
