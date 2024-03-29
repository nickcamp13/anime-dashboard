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
        response = await fetch(`https://api.jikan.moe/v4/anime?sfw=true`);
      } else {
        response = await fetch(`https://api.jikan.moe/v4/anime?sfw=true&q=${query}`)
      }
      const json = await response.json();
      setAnime(json.data);
    };

    getAnime().catch(console.error);
  }, [query]);

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

      <AnimeList list={anime} setQuery={setQuery}/>
    </div>
  );
}

export default App;
