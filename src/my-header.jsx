import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/my-styles.css';



function MyHeader() {

    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);

    const navigateToBrands = () => {
      navigate('/brands');
    };
  
    const navigateToCart = () => {
      navigate('/my-cart');
    };
  
    const navigateToHome = () => {
      navigate('/');
    };
return (
    <div>
      <header>
      <div className='body'>
             <div className="header">
                <div className="Container">
                <img className="icon"src="https://storage.googleapis.com/eezee-storage/flags/SG.png"/>
                <div className="headerText">Singapore</div>
                <img className='icon' src='https://storage.googleapis.com/imgez/icons/phone-icon-grey-secondary.svg'/>
                <div className="headerText">+65 6797 9688</div>
                </div>
            </div>
            <div className='titleContainer'>
              <img className='title' src= 'https://storage.googleapis.com/imgez/eezee-logos/logo-on-white-nopadding.svg' onClick={navigateToHome}/>
              <div className="cart-icon" onClick={navigateToCart}>
                <img src='https://storage.googleapis.com/imgez/icons/cart-icon.svg' className="shopping-cart"></img> 
                
                {cartCount > -1 && <div className="cart-count">{cartCount}</div>}
                <span className='cartName'>Cart</span>
              </div>
            </div>
            <div className='viewBrands'>
              <a onClick={navigateToBrands}>View all brands</a>
              
            </div> 
            </div>
            </header>
    </div>
    )
    
}

export default MyHeader;