import Product from "./Product"
import DiscountImage from '../../src/img/popust-0.jpg'

import { Link } from 'react-router-dom'

const Discount = () => {
  return (
    <div id="discount" className="discount__section">
      <Link to="/valentinov-popust">
        <Product addClass="lying" productName="Valentinov paket" productImg={DiscountImage} />
      </Link>
    </div>
  )
}

export default Discount
