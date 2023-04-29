import React, { useState, useEffect } from 'react';
import './styles/my-styles.css';
import { useNavigate } from "react-router-dom";
import MyHeader from './my-header';

function MyBrands() {
  const [brands, setBrands] = useState([]);
  const [groupedBrands, setGroupedBrands] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

    const navigateToBrands = () => {
      navigate('/brands');
    };
  
    const navigateToCart = () => {
      navigate('/my-cart');
    };
  
    const navigateToHome = () => {
      navigate('/');
    };

  useEffect(() => {
    fetch('/data/brands.json')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const uniqueLetters = [...new Set(brands.map(brand => brand.name[0]))];
    uniqueLetters.sort();
    const sortedBrands = brands.sort((a, b) => (a.name > b.name) ? 1 : -1);

    const brandGroups = uniqueLetters.map(letter => {
      const filteredBrands = sortedBrands.filter(brand => brand.name[0] === letter);
      return { letter, brands: filteredBrands };
    });
    
    const newGroupedBrands = {};
    brandGroups.forEach(group => {
      newGroupedBrands[group.letter] = group.brands;
    });
    
    setGroupedBrands(newGroupedBrands);
  }, [brands]);

  if (brands.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>

<MyHeader />
      
      <div className="brands-list">
        {Object.keys(groupedBrands).map((letter) => (
          <div className="brand-group" key={letter}>
            <h3>{letter}</h3>
            <div className="brands-starting-with">
              {groupedBrands[letter].map((brand) => (
                <div className="brand" key={brand.id}>
                  <img
                    className="brand-image"
                    src={brand.image && brand.image.url}
                    alt={brand.name}
                  />
                  <div className="brand-info">
                    <h2 className="brand-name">{brand.name}</h2>
                    <p className="product-count">{brand.productCount} Products</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBrands;
