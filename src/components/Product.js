
const Product = ({ productLink, productName, productImg, addClass }) => {

  return (
    <div className="product__container">
      <a href={productLink} className="top">{productName}</a>
      <div className={`product ${addClass}`} style={{backgroundImage: `url(${productImg})`}} >
        <a href={productLink} className="bottom" >{productName}</a>
      </div>
    </div>
  )
}

export default Product
