import { Link } from 'react-router-dom'
// Import All product images
import DigFoto from '../img/dig-foto-small.jpg'
import LinijskaFoto from '../img/linijska-foto-small.jpg'
import OtroskiBag from '../img/otroski-nahrbtnik-small.jpg'
import Pillow from '../img/pillow-small.jpg'
import Scruncie from '../img/scruncie-small.jpg'
import Tote from '../img/torbica-small.jpg'
// Components
import Product from './Product'


const Products = () => {
  return (
    <section id="products" className="products" >
      <Link to="/dig-foto" >
        <Product
          productName="personalizirana digitalna ilustracija" 
          productImg={DigFoto}
          addClass="standing"
          productLink="/dig-foto"
        />
      </Link>
      <Link to="/linijska-foto">
        <Product 
          productName="linijska digitalna ilustracija"
          productImg={LinijskaFoto}
          addClass="lying"
          productLink="/linijska-foto"
        />
      </Link>
      <Link to="/povstrcki">
        <Product 
          productName="Personalizirani Povštrčki" 
          productImg={Pillow}
          addClass="standing"
        />
      </Link>
      <Link to="/nahrbtniki" >
        <Product 
          productName="Personalizirani otroški nahrbtniki" 
          productImg={OtroskiBag}
          addClass="lying"
        />
      </Link>
      <Link to="/tote-bagi">
        <Product 
          productName="Personalizirani tote-bagi" 
          productImg={Tote}
          addClass="standing"
        />
      </Link>  
      <Link to="/scrunchie">
        <Product 
          productName="scrunchie" 
          productImg={Scruncie}
          addClass="lying"
        />
      </Link>
    </section>
  )
}

export default Products
