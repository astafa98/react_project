import { Movie } from '../../types/types';
import { FilmCard } from '../filmcard/FilmCard';
import Spinner from '../spinner/Spinner';
import styles from './Movies.module.scss';

interface MoviesProps {
  movies: Movie[];
  isLoading: boolean;
}

const Movies = ({ movies, isLoading }: MoviesProps) => {
  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return movies.length > 0 ? (
    <div className={styles.container}>
      {movies.map((m) => (
        <FilmCard
          id={m.id}
          key={m.id}
          filmName={m.name}
          imageUrl={m.backdrop.url}
          year={m.year}
          rating={m.rating.imdb}
          genre={m.genres[0]?.name ?? ''}
        />
      ))}
    </div>
  ) : (
    <p className={styles.text}>No results</p>
  );
};

export default Movies;
