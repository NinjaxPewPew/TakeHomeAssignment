import React, { useState, useEffect } from 'react';
import productsData from './data/products.json';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchedProduct = productsData.find((p) => p.id === id);
    setProduct(fetchedProduct);
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    // Add the product to cart with the selected quantity
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-images">
        {product.images.map((image, index) => (
          <img src={image.url} alt={product.title} key={index} />
        ))}
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-metadata">
          <img src={product.metadata.brandImage} alt={product.metadata.brand} />
          <span>{product.metadata.model}</span>
        </div>
        <div className="product-description" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <div className="product-pricing">
          {product.vipPriceFlag && <span className="product-vip-price">VIP price</span>}
          {product.bulkDiscountFlag && <span className="product-bulk-discount">Bulk discount</span>}
          <div className="product-price">
            {product.lowPricePretty && (
              <>
                <span className="product-low-price">{product.lowPricePretty}</span>
                {product.highPricePretty && <span className="product-high-price">{product.highPricePretty}</span>}
              </>
            )}
          </div>
        </div>
        <div className="product-quantity">
          <label htmlFor="quantity">Quantity:</label>
          <div className="quantity-selector">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <input type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={handleQuantityChange} />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;

