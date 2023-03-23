import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsById } from 'fetch';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsById(id).then(res => setReviews(res));
  }, [id]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <>
          <h3>Reviews</h3>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>There are no reviews yet</p>
      )}
    </div>
  );
};
