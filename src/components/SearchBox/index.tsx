import { useMemo, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import DatePicker from '../UI/DatePicker';
import Button from '../UI/Button';
import './index.css';
import useMediaQuery from '../../hooks/useMediaQuery';

const SearchBox = ({ onSearch }: any) => {
  const showOnlyOneMonth = useMediaQuery('(max-width: 690px)');
  const [values, setValues] = useState({
    dateFrom: '',
    dateTo: ''
  });

  return (
    <div className="searchbox-container">
      <h1>Los productos para animar y decorar tu celebracion</h1>
      <form
        className="searchbox-form"
        onSubmit={(e: any) => {
          e.preventDefault();
          onSearch(values);
        }}
      >
        <DatePicker
          onChange={(start: any, end: any) => {
            setValues({ ...values, dateFrom: start, dateTo: end });
          }}
          className="searchbox-date-picker"
          monthsShown={showOnlyOneMonth ? 1 : 2}
          withButton
        />
        <Button
          type="submit"
          label="Buscar"
          className="searchbox-search-button"
        />
      </form>
    </div>
  );
};

export default SearchBox;
