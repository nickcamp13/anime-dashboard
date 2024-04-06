import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const AnimeDetails = () => {
  let { id } = useParams();
  const location = useLocation();
  const anime = location.state;

  const foo = () => console.log(anime);

  useEffect(() => foo(), []);

  return (
    <div>
      <h1>{anime.anime.titles[0].title}</h1>
      <div className="img-stats">
        <img src={anime.anime.images.jpg.image_url} alt="" className="" />
        <div>
          <p className="stats">
            <span className="category">Rating:</span> {anime.anime.rating}
          </p>
          <p className="stats">
            <span className="category">Score:</span> {anime.anime.score}/10
          </p>
          <p className="stats">
            <span className="category">Started Airing:</span>{" "}
            {anime.anime.aired.string}
          </p>
          <p className="stats">
            <span className="category">Status:</span> {anime.anime.status}
          </p>
          <p className="stats">
            <span className="category">Number of Episodes:</span>{" "}
            {anime.anime.episodes}
          </p>
          <p className="stats">
            <span className="category">Genres:</span>{" "}
            {anime.anime.genres.map((genre, i) => (
              <span key={i}>{genre.name}, </span>
            ))}
          </p>
          <p className="stats">
            <span className="category">Popularity on MyAnimeList:</span>{" "}
            {anime.anime.popularity}
          </p>
        </div>
      </div>
      <p>{anime.anime.synopsis}</p>
    </div>
  );
};

export default AnimeDetails;
