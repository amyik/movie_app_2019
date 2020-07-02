import React from 'react';
import Proptypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>score : {rating} / 5.0</h3>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired

}

const foodILinke = [
  {
    id: 1,
    name: "kimchi",
    image: "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "potato",
    image: "https://lh3.googleusercontent.com/proxy/9wOeRUYCGmhl0OSwOv86yNhhf_qyJ0oj_96P_qQYZtVkh_kfrn31iwH-qRzwMmsADYiifj0wVF2AAej4kurDZmGS4TwogRWVe9Z3sN5AVemOY18",
    rating: 4.8
  }
]

function App() {
  return (
    <div>
      {foodILinke.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
