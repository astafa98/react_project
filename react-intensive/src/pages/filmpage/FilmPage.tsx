import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../api/movie';
import Spinner from '../../components/spinner/Spinner';
import styles from './FilmPage.module.scss';

export function CustomizedRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component='legend'>Rating</Typography>
      <Rating name='customized-10' defaultValue={2} max={10} />
    </Box>
  );
}

const FilmPage = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const { data, isLoading, isFetching, isError } = useGetMovieByIdQuery({
    id: Number(movieId),
  });

  if (isError) {
    return <p>Can't load movie details</p>;
  }

  if (isLoading || isFetching) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.filmPage}>
      <div>
        <div className={styles.filmImage}>
          <img
            className={styles.filmImage}
            src={data?.poster.url}
            alt='movie poster'
          />
        </div>
      </div>
      <div className={styles.filmDescription}>
        <div className={styles.filmName}>{data?.name}</div>
        <div className={styles.filmTextDescription}>{data?.description}</div>
        <div className={styles.buttonsContainer}>
          <div className={styles.filmRating}>
            <CustomizedRating />
          </div>
          <button className={styles.button}>Trailer</button>
          <button className={styles.button}>View Film</button>
        </div>
      </div>
    </div>
  );
};

export default FilmPage;
