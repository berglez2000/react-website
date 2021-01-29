import Button from './Button'

const Home = ({ imgSrc }) => {

  return (
    <section id="home" >
      <div className="box-1"></div>
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
      <div className="box-3"></div>
      <div className="box-4">
        <h3 className="subtitle" >Personalizirana darila & Ilustracije</h3>
        <div className="btns">
          <a href="#products"><Button btnClass="" btnText="Izdelki" /></a>
          <a href="#about"><Button btnClass="" btnText="O meni" /></a>
        </div>
      </div>
    </section>
  )
}

export default Home