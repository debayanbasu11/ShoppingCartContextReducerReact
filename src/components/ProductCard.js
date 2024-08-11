import "./ProductCard.css";
import { useState, useEffect } from 'react';
import { useCart } from "../context/CartContext";
export const ProductCard = ({product}) => {

  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, SetIsInCart] = useState(false);
  const { id, name, price, image} = product;

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);
    if(productIsInCart)
      SetIsInCart(true);
    else
      SetIsInCart(false);
  }, [cartList,id]);

  return (
    <div className="productCard">
    <img src={image} alt={name} />
    <p className="name">{name}</p>
    <div className="action">
      <p>${price}</p>
      { isInCart ? (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>) :  (<button onClick={() => addToCart(product)}>Add To Cart</button>) }
    </div>
  </div>
)
}