import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/api-service';
import css from './Reviews.module.css';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState({ hasResults: false });

  useEffect(() => {
    getMovieReviews(movieId).then(setReview);
  }, [movieId]);

  return (
    <div className={css.reviews}>
      {review.hasResults ? (
        <ul className={css.reviewsList}>
          {review.results.map(({ id, author, content, created_date }) => (
            <li className={css.reviewsItem} key={id}>
              <h3>
                Author:{' "'}
                {author}
                {'" posted at '}
                {created_date.toLocaleDateString()}
              </h3>
              <div>{content}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </div>
  );
};

export default MovieReviews;
