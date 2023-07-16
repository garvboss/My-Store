import React from 'react'
import { useStateValue } from "./StateProvider";
import image from "../Images/image1.jpg";
import CheckoutProduct from "./CheckoutProduct.js";
// import Subtotal from "./Subtotal";
// import CurrencyFormat from "react-currency-format";
function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_img" src={image} alt="offer" />
        {basket?.length===0 ? (
          <div>
              <h2 className="checkout_title">Your Shopping Basket is empty</h2>
              <p>
                  You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
              </p>
          </div>
        ) : (
          <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>
              {basket.map((item) => {
                  return(
                  <CheckoutProduct 
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      description={item.description}
                  />
                  );
              })}
          </div>
        )} 
      </div>
      {/* {basket.length>0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )} */}
    </div>
  )
}

export default Checkout;
