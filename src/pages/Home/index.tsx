import CategoryCard from '../../components/CategoryCard';
import ProductCard from '../../components/ProductCard';
import SearchBox from '../../components/SearchBox';
import useFetch from '../../hooks/useFetch';

import './index.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { getDateFormatted } from '../../utils/date';

const HomePage = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDates, setSelectedDates] = useState({
    dateFrom: '',
    dateTo: ''
  });

  const handleSearch = (data: any) => {
    let checkIn;
    let checkOut;
  
    if (data.dateFrom) {
      checkIn = getDateFormatted(data.dateFrom);
      checkOut = getDateFormatted(data.dateTo);
      setSelectedDates({ dateFrom: checkIn, dateTo: checkOut });
    } else {
      checkIn = '';
      checkOut = '';
    }
  };
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };
  
  const isResults =
    !!selectedCategory || !!selectedDates.dateTo;

    return (
      <>
        <SearchBox onSearch={handleSearch} />
        <div className="home-categories-container">
          <div className="container">
            <h2>Buscar por tipo de decoracion</h2>
            <div className="home-categories-grid">
            <h1>CARDS</h1>
            </div>
          </div>
        </div>
        <div className="home-recomendations-container">
          <div className="container">
            <h2>Recomendaciones</h2>
          </div>
        </div>
      </>
    );
  };
  
  export default HomePage;
  