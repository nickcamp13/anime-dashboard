import { useEffect, useState } from "react";
import AnimeList from "./components/AnimeList";
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

  return (
    <div className="app">
      <div id="sidebar">
        <header>
          <h3>Anime Dashboard</h3>
        </header>
        <nav>
          <li>Dashboard</li>
          <li>Search</li>
          <li>About</li>
        </nav>
      </div>
      <main>
        <AnimeList list={anime} setQuery={setQuery} />
      </main>
    </div>
  );
}

export default App;
