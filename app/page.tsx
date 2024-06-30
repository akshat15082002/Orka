'use client'

import './page.css'
// import of components for home page
import Button from './components/Button'
import HomeSection1 from './components/HomeSection1/HomeSection1'
import HomeSection2 from './components/HomeSection2/HomeSection2'
import HomeSection3 from './components/HomeSection3/HomeSection3'
import HomeSection4 from './components/HomeSection4/HomeSection4';
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer';
import FloatHeading from './components/FloatHeading/FloatHeading';


export default function Home() {
  
  return (
    <div className='main-home-page'>
      

      <HomeSection1 />

      <Button />

      <HomeSection2 />
      
      <Slider />

      <HomeSection3 />

      <HomeSection4 />


      <FloatHeading />

      
      <Footer />

      

    </div>
  );
}

