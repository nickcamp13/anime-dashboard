/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AnimeInfo = ({ anime, num }) => {
  return (
    <tr>
      <td>{num + 1}</td>
      <td>
        <img src={anime.images.jpg.image_url} alt="" className="cover-img" />
      </td>
      <td>{anime.title_english ? anime.title_english : anime.titles[0].title}</td>
      <td>
        <div className="genres">
          {anime.genres.map((genre, i) => (
            <span key={i}>{genre.name}</span>
          ))}
        </div>
      </td>
      <td>{anime.popularity}</td>
      <td>
        <Link to={`/anime/${anime.titles[0].title}`} state={{ anime }}>More Details</Link>
      </td>
    </tr>
  );
};

export default AnimeInfo;
