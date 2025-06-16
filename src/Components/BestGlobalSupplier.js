import React from 'react'

import "./BestGlobalSupplier.css"

import bgs1 from "./assets/BestGlobalSupplier/BGS (1).png"
import bgs2 from "./assets/BestGlobalSupplier/BGS (2).png"
import bgs3 from "./assets/BestGlobalSupplier/BGS (3).png"
import bgs4 from "./assets/BestGlobalSupplier/BGS (4).png"
import bgs5 from "./assets/BestGlobalSupplier/BGS (5).png"
import bgs6 from "./assets/BestGlobalSupplier/BGS (6).png"

const BestGlobalSupplier = () => {
  return (
    <div className='BestGlobalSupplier container'>
        <h2>The Best Global Supplier</h2>
        <div className='details'>
            <p className='para'>We use carefully screened, reputable suppliers for materials and fittings. They must meet our quality standards to be included in a ArticleArt.</p>
            <div className='img-div'>
                <img src={bgs1}/>
                <img src={bgs2}/>
                <img src={bgs3}/>
                <img src={bgs4}/>
                <img src={bgs5}/>
                <img src={bgs6}/>
            </div>
        </div>
    </div>
  )
}

export default BestGlobalSupplier