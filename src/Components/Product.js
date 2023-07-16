import React from 'react'
import {useStateValue} from "./StateProvider.js"
function Product(props) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        description: props.description,
        date: props.date,
        source: props.source,
      },
    });
  };
  return (
    <div className="product">
        <div className="product_info">
          <div className="product_f">
            <span><p>{props.title}</p></span>
            <span><p>{props.date}</p></span>
          </div>
            <p>{props.description}</p>
            <p className="product_price">
            <small>₹ </small>
            <strong>{props.price}</strong>
            </p>
            <p>{props.source}</p>
        <div className="product_rating">
         {   
            Array(props.rating)
            .fill()
            .map(() =>(
                <p>⭐</p>
            ))
         }
        </div>
        </div>
      <img src={props.image} alt="ig" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product


