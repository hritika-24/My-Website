import React from 'react'
import Header from './Header'
import Slider from './Slider'
import HomeInteriorMadeEasy from './HomeInteriorMadeEasy'
import WhyArticleArt from './WhyArticleArt'
import BestGlobalSupplier from './BestGlobalSupplier'
import VisitOurManufacturingPlant from './VisitOurManufacturingPlant'
import Founder from './Founder'
import FAQ from './FAQ'


const Home = () => {
  return (
    <div className='Home'>
        <Slider/>
        <HomeInteriorMadeEasy/>
        <WhyArticleArt/>
        <BestGlobalSupplier/>
        <VisitOurManufacturingPlant/>
        <Founder/>
        <FAQ/>
    </div>
  )
}

export default Home