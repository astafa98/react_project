import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './Error.module.scss';
import clsx from 'clsx';
import { Paths } from '../../const';
import Button from '../../components/button/Button';

interface IErrorStatus {
  code?: number;
  message: string;
}

export const ErrorPage = () => {
  const error = useRouteError();
  const errorStatus: IErrorStatus = {
    message: 'Undexpected Error. Try to refresh the page',
  };

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorStatus.code = 404;
      errorStatus.message = 'Page Not Found';
    } else {
      errorStatus.message = error.data;
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={clsx(styles.text, styles.errorCode)}>
        {errorStatus.code}
      </h1>
      <p className={styles.text}>{errorStatus.message}</p>
      <Link to={Paths.Root} reloadDocument className={styles.link}>
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
