const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieInfo = ({ movie }) => {
  const { title, original_title, overview, genres, poster_path, vote_average } =
    movie;

    const allGenres = genres.map( genre => genre.name).join(', ');
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt={title || original_title}
      />
      <h2>{title || original_title}</h2>
      <p>User score: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {allGenres}</p>
    </div>
  );
};

export default MovieInfo;
