/* eslint-disable react/prop-types */

const AnimeInfo = ({ anime }) => {
  return (
    <tr>
      <td>
        <img src={anime.images.jpg.image_url} alt="" />
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
    </tr>
  );
};

export default AnimeInfo;
