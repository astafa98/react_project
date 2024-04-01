import { LoaderFunction } from 'react-router-dom';
import { getInitialFilters } from '../../utils/helpers';

export const catalogLoader: LoaderFunction = ({ request }) => {
  const { searchParams } = new URL(request.url);

  return getInitialFilters(searchParams);
};
