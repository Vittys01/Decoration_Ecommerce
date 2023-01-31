import { Product } from '../../../types/product';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Score from '../../UI/Score';
import { MdLocationOn as LocationIcon } from 'react-icons/md';
import './index.css';

const ProductInfoHeader = ({ distance }: Partial<Product>) => {
  const isMobile = useMediaQuery('(max-width: 576px)');

  return (
    <div className="product-info-header-container">
      <div className="product-info-header-content container">
        <div className="flex">
          <LocationIcon className="product-ubication-icon" />
          <div className="product-ubication-text">
            {!isMobile && <p>A {distance}m del centro</p>}
          </div>
        </div>
        <Score value={8} isHorizontal />
      </div>
    </div>
  );
};

export default ProductInfoHeader;
