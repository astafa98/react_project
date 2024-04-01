import { useSearchParams } from 'react-router-dom';
import Movies from '../../components/movies/Movies';
import { useSearchMoviesQuery } from '../../api/movies';

const SearchPage = () => {
  const searchParams = useSearchParams();

  const { data, isLoading, isFetching } = useSearchMoviesQuery({
    query: searchParams[0].get('query')!,
    limit: 50,
  });

  return (
    <Movies movies={data?.docs ?? []} isLoading={isLoading || isFetching} />
  );
};

export default SearchPage;
