import React, { useState } from 'react';
import './styles/my-styles.css';
import brandsData from './data/brands.json';
import productsData from './data/products.json';
import { IoIosArrowForward } from 'react-icons/io';
import {Link, useNavigate} from 'react-router-dom';
import MyHeader from './my-header';




function HomePage() {
  
  const brands = brandsData;
  const products = productsData;
  const navigate = useNavigate();
  

  const navigateToBrands = () => {
    navigate('/brands');
  };

  const navigateToProduct = () => {
    navigate('/products');
}

  

  if(!brands){
    return <div>Loading ...</div>
  };
  if(!products){
    return <div>Loading ...</div>
  }
        

    return (
        <div className='body'>
          <MyHeader/>
             
            
            
            <div className='bannerContainer'>
                <img className='banner' src="https://api.eezee.sg/image/resize?height=385&width=984&url=https://storage.googleapis.com/eezee-banner-images/4lIFLboZl0EEIGm1t3W25m.jpg&resizeStrategy=cover" alt="banner" />
            </div>
        
        
        
            <h1>Featured Brands</h1>
            <div className='subHeader'>Browse the full catalog of brands today
              <div className='arrowContainer'>
                <a className='arrowIcon' onClick={navigateToBrands}>View More <IoIosArrowForward/></a>
              </div>
             </div>
          <div className="brand-list">
          {brands.filter(brands => brands.featured).map(brands => (
              <div className="brand" key={brands.id}>
              <img className="brand-image" src={brands.image && brands.image.url} alt={brands.name} />
              <div className="brand-info">
                <h2 className="brand-name">{brands.name}</h2>
                <p className="product-count">{brands.productCount} Products</p>
              </div>
            </div>
            ))}
          </div>
          <h1>Our Products</h1>
          <div className='subHeader'>Trusted by the best companies in Asia
             <div className='arrowContainer'>
                <a className='arrowIcon' onClick={navigateToProduct}>View More <IoIosArrowForward/></a>
              </div>
          </div>
          <div className="product-list">
          {products.sort((a, b) => a.uniqTitle - b.uniqTitle).map(products => (
              <div className="product" key={products.id}>
              <img className="product-image" src={products.images[0].url} alt={products.name} />
              <div className="product-price">{products.lowPricePretty}
          {products.highPricePretty && ` - ${products.highPricePretty}`}</div>
              <div className="product-info">
              <Link className='links' to={`/products/${products.id}`}>{products.title}</Link>
              </div>
            </div>
            ))}
          </div>
        
        </div>





    );
}


export default HomePage;
