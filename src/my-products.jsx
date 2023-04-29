import React, { useState, useEffect } from 'react';
import productsData from './data/products.json';
import {Link} from 'react-router-dom';
import MyHeader from './my-header';


function MyProduct() {


    const products = productsData;
    const [allProducts, setProducts] = useState([]);
    const totalProduct = products.length;

    
    useEffect(() => {
        setProducts(productsData);
      }, []);

    
    


    if(!products){
        return <div>Loading ...</div>
      }


      return(
        <div className='body'>
            <MyHeader/>
            <div className='productHeader'>Our Products</div>
          <div className='productSubHeader'>{totalProduct} Product </div>

          <div className="product-list">
          {products.sort((a, b) => a.uniqTitle - b.uniqTitle).map(products => (
              <div className="product" key={products.id}>
                 
              <img className="product-image" src={products.images[0].url} alt={products.name} />
              {products.vipPriceFlag && <div>VIP Price Available</div>}
              {products.bulkDiscountFlag && <div>Bulk Discount Available</div>}
              {products.moq && <div>MOQ: {products.moq}</div>}          
              <div className="product-price">{products.lowPricePretty}
          {products.highPricePretty && ` - ${products.highPricePretty}`}</div>
              <div className="product-info">
              <Link className='links' to={`/products/${products.id}`}>{products.title}</Link>
              </div>
            </div>
            ))}
          </div>

        </div>
        
      )
}

export default MyProduct;