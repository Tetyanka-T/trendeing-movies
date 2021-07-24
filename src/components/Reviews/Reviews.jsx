import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router';
import * as movieApi from 'apiService/apiService';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function onFetchReviews() {
      try {
        const reviews = await movieApi.fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (err) {
        // toast.error('We don't have any reviews for this movie');
      }
    }
    onFetchReviews();
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>

      <ul>
        {reviews.map(review => (
          <li key={review.author}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
