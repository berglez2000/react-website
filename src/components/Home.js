import Button from './Button'

const Home = ({ imgSrc, onLoad }) => {

  return (
    <section id="home" onLoad={onLoad} >
      <div className="box-2">
        <img src={imgSrc} className="home-img" alt="home img"/>
        <h1>
          <span>D</span>
          <span>E</span>
          <span>S</span>
          <span>I</span>
          <span>G</span>
          <span>N</span>
        </h1>
      </div>
      <div className="box-4">
        <h3 className="subtitle" >Personalizirana darila & Ilustracije</h3>
        <div className="btns">
          <a href="#discount" className="btn"><span>Novo</span></a>
          <a href="#products" className="btn"><span>Izdelki</span></a>
        </div>
      </div>
    </section>
  )
}

export default Home
