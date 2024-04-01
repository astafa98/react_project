import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { deleteUser, userSelector } from '../../store/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { createSearchQuery } from '../../utils/helpers';
import { MovieTypes } from '../../types/types';
import { Paths } from '../../const';

import Button from '../button/Button';

import styles from './Header.module.scss';

const Header: FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [menuShow, setMenuShow] = useState<boolean>(false);

  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useOutsideClick({
    elementRef: listRef,
    triggerRef: buttonRef,
    enabled: menuShow,
    onOutsideClick: () => setMenuShow(false),
  });

  return (
    <header className={styles.header}>
      <Link to={Paths.Root} className={styles.logo}>
        <div className={styles.bold}>
          <span className={styles.bounce_letter}>A</span>
          <span>ston</span>
        </div>
        <div className={styles.thin}>FILMS</div>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <Link
              to={{
                pathname: Paths.Catalog,
                search: createSearchQuery({ type: MovieTypes.Movie }),
              }}
            >
              Movies
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link
              to={{
                pathname: Paths.Catalog,
                search: createSearchQuery({ type: MovieTypes.TvSeries }),
              }}
            >
              TV Series
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link
              to={{
                pathname: Paths.Catalog,
                search: createSearchQuery({ type: MovieTypes.Cartoon }),
              }}
            >
              Cartoons
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user_block}>
        {user ? (
          <div className={styles.dropdown_container}>
            <button
              ref={buttonRef}
              className={styles.main_button}
              onClick={() => setMenuShow((prev) => !prev)}
            >
              <span
                className={clsx(styles.dropdown_title, styles.text_truncate)}
              >
                {user.username}
              </span>
              <span
                className={clsx(
                  styles.dropdown_arrow,
                  menuShow && styles.active
                )}
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                  <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                </svg>
              </span>
            </button>
            <div
              className={clsx(
                styles.dropdown_list_container,
                menuShow && styles.active,
                !menuShow && styles.hidden
              )}
              ref={listRef}
            >
              <div className={styles.dropdown_list_wrapper}>
                <ul className={styles.dropdown_list}>
                  <li
                    className={styles.dropdown_list_item}
                    onClick={() => setMenuShow(false)}
                  >
                    <Link
                      className={clsx(
                        styles.dropdown_button,
                        styles.list_button
                      )}
                      to={Paths.History}
                    >
                      History
                    </Link>
                  </li>
                  <li
                    className={styles.dropdown_list_item}
                    onClick={() => setMenuShow(false)}
                  >
                    <Link
                      to={Paths.Favorites}
                      className={clsx(
                        styles.dropdown_button,
                        styles.list_button
                      )}
                    >
                      Favorites
                    </Link>
                  </li>
                  <li
                    className={styles.dropdown_list_item}
                    onClick={() => setMenuShow(false)}
                  >
                    <button
                      onClick={() => dispatch(deleteUser())}
                      className={clsx(
                        styles.dropdown_button,
                        styles.list_button
                      )}
                    >
                      <span className={styles.text_truncate}>log out</span>
                    </button>
                  </li>
                </ul>
                <div className={styles.floating_icon} aria-hidden='true'></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to={Paths.Login}>
              <Button>Login</Button>
            </Link>
            <Link to={Paths.Signup}>
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
