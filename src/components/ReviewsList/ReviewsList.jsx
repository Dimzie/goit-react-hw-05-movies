const ReviewsList = ({ reviews }) => {
//   console.log(reviews);
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>Review: {content}</p>
          </li>
        ))
      ) : (
        <p>Sorry we didnt found your reviews</p>
      )}
    </ul>
  );
};

export default ReviewsList;
