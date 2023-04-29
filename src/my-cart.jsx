import React, {useState} from "react";
import Products from './data/products.json';
import MyHeader from "./my-header";


function MyCart() {
    const [items, setItems] = useState([]);
  
    const addToCart = (product) => {
        const existingProductIndex = items.findIndex((item) => item.id === Products.id);
        if (existingProductIndex !== -1) {
          const updatedCart = [...items];
          updatedCart[existingProductIndex].quantity += 1;
          setItems(updatedCart);
        } else {
          const newCart = [...items, { ...product, quantity: 1 }];
          setItems(newCart);
        }
      };
    const removeItem = (item) => {
        // Check if item is already in cart
        const existingItemIndex = items.findIndex((i) => i.id === item.id);
        if (existingItemIndex !== -1) {
          // Item exists, decrement quantity
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity--;
          if (updatedItems[existingItemIndex].quantity === 0) {
            // Item quantity is zero, remove from cart
            updatedItems.splice(existingItemIndex, 1);
          }
          setItems(updatedItems);
        }
      };

      const clearCart = () => {
        setItems([]);
      };
      return (
        <div>
          <MyHeader/>
          <h2>Cart</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity})
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeItem(item)}>-</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      );
    }

    export default MyCart;
