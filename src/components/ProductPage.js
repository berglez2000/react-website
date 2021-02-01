//Import check
import Check from '../img/check-mark.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ 
  title, smallImages, name, 
  productDesc, price, checks, 
  hasFrame, personPrice, framePrice,
  imgLength, hasColors, colors, hasSizes,
  hasColorSizes, hasAddDesc, addDesc
  }) => {

  let [currentImg, setCurrentImg] = useState(0)

  const ImageHandler = (e) => {
    setCurrentImg(e.target.alt);
  }

  const moveImage = (direction) => {

    if (currentImg > imgLength){
      currentImg = 0;
    } else if (currentImg < 0){
      currentImg = imgLength;
    }

    if (direction === "right"){
      return setCurrentImg(currentImg++);
    } else {
      return setCurrentImg(currentImg--);
    }
  }

  return (
    <div className="product__page" >

      <section className="image__section">
        <Link to="/" ><i class="fas fa-chevron-left"></i></Link>
        <h1 className="title">{title}</h1>
        <div className="large__image">
          <button onClick={(e) => {
            e.preventDefault();
            moveImage("left")
            }} className="left"><i onClick={() => moveImage("left")} className="fas fa-arrow-left left"></i></button>
          <img className="img__large" src={`./img/${name}-${currentImg}.jpg`} alt=""/>
          <button onClick={(e) => {
            e.preventDefault();
            moveImage("right")
            }} className="right"><i onClick={() => moveImage("right")} className="fas fa-arrow-right right"></i></button>
        </div>
        <div className="small__images">
          {smallImages.map((img, index) => {
            return <img onClick={ImageHandler} src={img} alt={index} key={index} />
          })}
        </div>
      </section>

      <section className="about__section">
        <h1 className="title primary">{title}</h1>
        {hasAddDesc ? <div className="add_description">
          {addDesc.map(desc => {
            return <p>{desc}</p>
          })}
        </div> : ""}
        <p className="product-desc" >{productDesc}</p>
        {hasColorSizes ? <div className="color-sizes">
          {hasColors ? <div className="color-section">
            <h1 className="secondary">Barve</h1>
            <div className="colors">
              {colors.map(color => {
                return <div key={Math.floor(Math.random() * 100000)} className="color">
                  <div className="color-show" style={{backgroundColor: color.hex}}></div>
                  <p>{color.name}</p>
                </div>
              })}
            </div>
          </div> : ""}
          {hasSizes ? <div className="size-section">
            <h1 className="secondary">Velikosti</h1>
            <ul className="sizes">
              <li><strong className="primary">mini </strong><strong className="secondary">2-4leta</strong> (26x34 cm)</li>
              <li><strong className="primary">medium </strong><strong className="secondary">5-9let</strong> (30x38 cm)</li>
              <li><strong className="primary">maksi </strong><strong className="secondary">10+let</strong> (34x42 cm)</li>
            </ul>
          </div> : ""}
        </div> : ""}
        <div className="price-sect">
          <strong className="price">{price}€ {hasFrame ? <p>(do 2 osebi)<br /></p> : ""} </strong>
          {hasFrame ? <strong className="add-price" >+ {personPrice}€ <p>(za vsako dodatno osebo) <br /> </p></strong> : ""}
          {hasFrame ? <strong className="add-price" >+ {framePrice}€ <p>(1x print z okvirjem) <br /> </p></strong> : ""}
        </div>
        <div className="checks">
          {checks.map(check => {
            return <div key={Math.floor(Math.random() * 100000)} className="check">
              <img className="check-img" src={Check} alt=""/>
              <p>{check}</p>
            </div>
          })}
        </div>
        <div className="shop">
          <strong>Nakup možen na:</strong>
          <div className="links">
            <div className="mail">
              <i className="fas fa-envelope"></i>
              <a href="mailto:anjaozbolt.design@gmail.com">anjaozbolt.design@gmail.com</a>
            </div>
            <div className="ig">
              <i className="fab fa-instagram"></i>
              <a target="_blank" href="https://www.instagram.com/anjaozboltdesign/">anjaozboltdesign</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
