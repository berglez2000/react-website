import { useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Import images
import HomeImg from './img/ao.png'
// Import Components
import Home from './components/Home'
import Products from './components/Products'
import ProductPage from './components/ProductPage'

const App = () => {
  const [images, setImages] = useState([
    {
      length: 6,
      name: "dig-foto",
      array: []
    },
    {
      length: 4,
      name: "linijska-foto",
      array: []
    },
    {
      length: 6,
      name: "povstrcki",
      array: []
    },
    {
      length: 4,
      name: "nahrbtniki",
      array: []
    },
    {
      length: 4,
      name: "tote",
      array: []
    },
    {
      length: 3,
      name: "scrunchie",
      array: []
    }
  ])

  const pushImages = () => {
    for (let i = 0; i < images.length; i++){
      for (let x = 0; x <= images[i].length; x++){
        images[i].array.push(`./img/${images[i].name}-${x}-x-small.jpg`)
      }
    }
  }


  pushImages();
  console.log(images);

  // Gsap Animations
  const homeAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.from(".home-img", {duration: 1, opacity: 0});
    tl.from("h1 span", {duration: 0.5, opacity: 0, stagger: 0.10});
    tl.from(".subtitle", {duration: 0.5, opacity: 0});
    tl.from(".btns a", {duration: 0.5, stagger: 0.15, opacity: 0});
    gsap.from(".product__container", {
      scrollTrigger: ".product__container",
      duration: 1, 
      opacity: 0, 
      stagger: 0.25, 
      x: -50
    });
  }

  return (
    <Router>
      <div
        className="container">
        <Switch>
          {/* ADD Routes */}
          <Route path="/" exact render={() => (
            <>
              <Home imgSrc={HomeImg} onLoad={homeAnimations} />
              <Products />
            </>
          )} />
          <Route path="/dig-foto" exact render={() => (
            <ProductPage 
              title="PERSONALIZIRANE DIGITALNE ILUSTRACIJE"
              productDesc="Ilustracije ponovno oživijo fotografije ter jim dodajo še bolj osebno noto. Čudovito darilo za prijateljico, sestro, punco, mamo…
              Okvirji so v velikostih A4, A5 ali 10x15 cm."
              price={27}
              hasFrame={true}
              personPrice={5}
              framePrice={6}
              smallImages={images[0].array}
              name="dig-foto"
              imgLength={6}
              hasColors={false}
              checks={["Oblikovano in izdelano v Sloveniji"]}
              hasColorSizes={false}
            />
          )} />

          <Route path="/linijska-foto" exact render={() => (
            <ProductPage 
              title="personalizirane digitalne ilustracije-linjske"
              productDesc="Poudarijo bistvene lastnosti in polepšajo pozabljene fotografije. Odlično darilo, ki se dotakne vsakogar. Bolj primerne so fotografije obraza ali od blizu slikani motivi.V enkraten nakup je vključena verzija iste ilustracije z belim in črnim ozadjem. Okvirji so v velikostih A4, A5 ali 10x15 cm."
              hasFrame={true}
              hasColors={false}
              framePrice={6}
              personPrice={4}
              checks={["Oblikovano in izdelano v Sloveniji"]}
              imgLength={4}
              name="linijska-foto"
              smallImages={images[1].array}
              price={17}
              colors={[]}
              hasColorSizes={false}
            />
          )} />

          <Route path="/povstrcki" exact render={() => (
            <ProductPage 
              title="personalizirani povštrčki"
              productDesc="Popolno darilo za mrzle zimske dni. Narejeni so iz toplega velurja ter napolnjeni z mehkim puhkom.
              Velikost: 35x35 cm"
              price={15}
              hasFrame={false}
              smallImages={images[2].array}
              name="povstrcki"
              imgLength={6}
              hasColors={true}  
              colors={[
                {
                  name: "Smetana",
                  hex: "#f1eee6"
                },
                {
                  name: "Sivobež",
                  hex: "#cecac4"
                },
                {
                  name: "Temno siva",
                  hex: "#696461"
                }
              ]}
              checks={["Oblikovano in izdelano v Sloveniji", "Ročno izdelano", "Ročno poslikano"]}
              hasColorSizes={true}
            />
          )} />

          <Route path="/nahrbtniki" exact render={() => (
            <ProductPage 
              title="personalizirani nahrbtnički"
              productDesc="Edinstveno darilo za sestrici ali prijateljici. Narejeni so iz kostimske tkanine, piko na i pa dodajo svetleče vrvice. Dolžina vrvic je prilagodljiva."
              price={24}
              hasFrame={false}
              smallImages={images[3].array}
              name="nahrbtniki"
              imgLength={4}
              hasColors={true}  
              colors={[
                {
                  name: "lavanda",
                  hex: "#988f9c"
                }
              ]}
              checks={["Oblikovano in izdelano v Sloveniji", "Ročno izdelano", "Ročno poslikano"]}
              hasSizes={true}
              hasColorSizes={true}
            />
          )} />

          <Route path="/tote-bagi" exact render={() => (
            <ProductPage 
              title="personalizirani tote-bagi"
              productDesc="Darilo, s katerim ne moreš zgrešiti. Narejeni so iz 100% bombažne tkanine ter ročno poslikani. Velikost: 34x40 cm"
              hasFrame={false}
              hasColors={true}
              colors={[
                {
                  name: "Bela",
                  hex: "#f5efef"
                },
                {
                  name: "Bež",
                  hex: "#d6cbbc"
                },
                {
                  name: "Črna",
                  hex: "#000"
                }
              ]}
              price={17}
              checks={["Oblikovano in izdelano v Sloveniji", "Ročno izdelano", "Ročno poslikano"]}
              imgLength={4}
              name={"tote"}
              hasSizes={false}
              smallImages={images[4].array}
              hasColorSizes={true}
            />
          )} />

          <Route path="/scrunchie" exact render={() => (
            <ProductPage 
              title="scrunchie"
              productDesc="Najmehkejše, najudobnejše in najlepše scrunchie elastike."
              imgLength={3}
              name="scrunchie"
              hasSizes={false}
              hasFrame={false}
              hasColors={true}
              colors={[
                {
                  name: "Smetana",
                  hex: "#f1eee6"
                },
                {
                  name: "Sivobež",
                  hex: "#cecac4"
                },
                {
                  name: "Temno siva",
                  hex: "#696461"
                }
              ]}
              price={3.50}
              checks={["Oblikovano in izdelano v Sloveniji", "Ročno izdelano"]}
              smallImages={images[5].array}
              hasColorSizes={true}
            />
          )} />
        </Switch>
      </div>
    </Router>
  )
}


export default App
