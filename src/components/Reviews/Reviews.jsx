import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import * as movieApi from 'apiService/apiService';
import s from "./Reviews.module.css";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function onFetchReviews() {
      try {
        const reviews = await movieApi.fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (err) {
        toast.error('Not found');
      }
    }
    onFetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(review => (
            <li key={review.author}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
