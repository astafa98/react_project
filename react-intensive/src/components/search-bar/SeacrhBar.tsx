import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Input from '../input/Input';
import styles from './SearchBar.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Paths } from '../../const';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('query') ?? ''
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    inputRef.current?.focus();
    setSearchValue('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!searchValue) {
      e.preventDefault();
      return;
    }
    navigate(Paths.Search);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        value={searchValue}
        onChange={handleInputChange}
        type='search'
        className={styles.input}
        ref={inputRef}
        name='query'
        placeholder='Search'
      />
      {searchValue && (
        <button
          type='reset'
          className={styles.button_cancel}
          onClick={clearInput}
        >
          <img src='/cancel.svg' alt='reset' className={styles.icon} />
        </button>
      )}
      <button type='submit' className={styles.button}>
        <img src='/search.svg' alt='search' className={styles.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
