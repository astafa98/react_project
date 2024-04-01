import React from 'react';
import styles from './FilmCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../const';

interface FilmCardProps {
  id: number | null;
  imageUrl: string | null;
  filmName: string | null;
  rating: number | null;
  year: number | null;
  genre: string | null;
}

export const FilmCard: React.FC<FilmCardProps> = ({
  imageUrl,
  filmName,
  rating,
  year,
  genre,
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${Paths.Movie}/${id}`);
  };

  return (
    <div className={styles.item} onClick={handleClick}>
      <div className={styles.image}>
        <img
          className={styles.image}
          src={imageUrl ?? 'no-image.png'}
          alt={filmName ?? 'no image'}
        />
      </div>
      <div className={styles.filmName}>{filmName}</div>
      <div className={styles.info}>
        {rating !== null && (
          <span className={rating >= 7.0 ? styles.rating_high : styles.rating}>
            {rating.toFixed(1)}
          </span>
        )}
        {year && <span>{year}</span>}
        {genre && <span className={styles.capitalized}>{genre}</span>}
      </div>
    </div>
  );
};
