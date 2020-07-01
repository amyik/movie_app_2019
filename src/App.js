import React from 'react';

function Food({fav}) {
return <h1>I linke {fav}</h1>
}

function App() {
  return (
    <div> 
      <h3>hello !!</h3>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgyupsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
