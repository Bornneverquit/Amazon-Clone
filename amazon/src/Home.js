import React from 'react'
import "./Home.css";
import Product from './Product';

const Home = () => {
  return (
    <div>
        <div className='home__container' >
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="homeImage"
        />

        <div className="home__row" >
            <Product title="The Lean Statup" price={29.99} img={"hhh"}
            rating={5} />
            <Product title="The Lean Statup" price={29.99} img={"hhh"}
            rating={5} />
        </div>

        
        <div className="home__row" >
        <Product title="The Lean Statup" price={29.99} img={"hhh"}
            rating={5} />
            <Product title="The Lean Statup" price={29.99} img={"hhh"}
            rating={5} />
            <Product title="The Lean Statup" price={29.99} img={"hhh"}
            rating={5} />
        </div>

        <div className="home__row" >
        <Product title="The Lean Statup" price={29.99} img={"hhh"}
            rating={5} />
        </div>
        </div>
    </div>
  )
}

export default Home;