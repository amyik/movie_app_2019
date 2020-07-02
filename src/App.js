import React from 'react';

function Food({name, picture}) {
return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
  ) 
}

const foodILinke = [
  {
    id: 1,
    name: "kimchi",
    image: "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg"
  },
  {
    id: 2,
    name: "potato",
    image: "https://lh3.googleusercontent.com/proxy/9wOeRUYCGmhl0OSwOv86yNhhf_qyJ0oj_96P_qQYZtVkh_kfrn31iwH-qRzwMmsADYiifj0wVF2AAej4kurDZmGS4TwogRWVe9Z3sN5AVemOY18"
  }
]

function App() {
  return (
    <div> 
      {foodILinke.map( (dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
