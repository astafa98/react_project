import { useLoaderData, useNavigate } from 'react-router-dom';
import Select from '../../components/select/Select';
import { COUNTRIES, GENRES, Paths, YEARS } from '../../const';
import styles from './Catalog.module.scss';
import { createSearchQuery, mapFilterOptions } from '../../utils/helpers';
import { FilterFieldNames, MovieFilters } from '../../api/types';
import Movies from '../../components/movies/Movies';
import { useGetFilteredMoviesQuery } from '../../api/movies';

const [genres, countries, years] = [
  mapFilterOptions(GENRES),
  mapFilterOptions(COUNTRIES),
  [{ id: 'default', name: 'All' }, ...YEARS.map((y) => ({ id: y, name: y }))],
];

const CatalogPage = () => {
  const navigate = useNavigate();
  const filters = useLoaderData() as MovieFilters;

  const handleChange = (name: string, item: string) => {
    const newValue = item === 'default' ? undefined : item;
    navigate({
      pathname: Paths.Catalog,
      search: createSearchQuery({ ...filters, [name]: newValue }),
    });
  };

  const { data, isLoading, isFetching } = useGetFilteredMoviesQuery({
    ...filters,
    limit: 50,
  });

  return (
    <div>
      <div className={styles.filters}>
        <label>
          <p className={styles.label}>Genre</p>
          <Select
            data={genres}
            name={FilterFieldNames.genre}
            className={styles.select}
            selectedItemId={filters[FilterFieldNames.genre] ?? 'default'}
            handleChange={handleChange}
          />
        </label>
        <label>
          <p className={styles.label}>Country</p>
          <Select
            data={countries}
            name={FilterFieldNames.country}
            className={styles.select}
            selectedItemId={filters[FilterFieldNames.country] ?? 'default'}
            handleChange={handleChange}
          />
        </label>
        <label>
          <p className={styles.label}>Year</p>
          <Select
            data={years}
            name={FilterFieldNames.year}
            className={styles.select}
            selectedItemId={filters[FilterFieldNames.year] ?? 'default'}
            handleChange={handleChange}
          />
        </label>
      </div>
      <Movies movies={data?.docs ?? []} isLoading={isLoading || isFetching} />
    </div>
  );
};

export default CatalogPage;
