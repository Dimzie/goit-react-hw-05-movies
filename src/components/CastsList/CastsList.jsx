const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const CastsList = ({ casts }) => {
  return (
    <ul>
      {casts.length > 0 ? casts.map(({ character, id, profile_path, name }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            width={250}
            alt={name}
          />
          <p>Name: {name}</p>
          <p>Character: {character}</p>
        </li>
      )) : <p>Sorry we didnt found your cast</p>}
    </ul>
  );
};

export default CastsList;
