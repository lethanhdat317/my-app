import logo from './logo.svg';
import './App.css';

import Item from './Item';

import React, { useState } from 'react';

function App() {
  const products =[
    {
      name: 'Iphone 11',
      price: 20000000,
    },
    {
      name: 'Iphone 11 pro',
      price: 25000000,
    },
    {
      name: 'Iphone 11 pro max',
      price: 27000000,
    },
    {
      name: 'Iphone 12',
      price: 28000000,
    },
    {
      name: 'Iphone 12 pro',
      price: 30000000,
    },
    {
      name: 'Iphone 12 pro max',
      price: 35000000,
    }
  ];

  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  function renderProductList() {
    return products.map((item, index)=> {
      return(
        <Item
        key={index}
        name={item.name}
        price={item.price}
      />
      );
    });
    
  }


  function removeCount() {
    if (count > 0) {
      setCount(count -1)
    }else{
      alert("ban ko the xuong nua");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           
        </a>
        {
          isShow ?
          (
            <div>
              {renderProductList()}
            </div>
          )
          : null
        }

        {/* hay là dùng && nếu ko cần dùng đến diều kiện thứ 2 trong toán tử 3 ngôi */}
        {/* {
          isShow &&
          (
            <div>
              {renderProductList()}
            </div>
          )
        } */}
        <div style={{display: (isShow) ? "" : "none"}}>
        <p>You clicked {count} times</p>
        <button onClick={removeCount}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button onClick={() => setIsShow(!isShow)}>{isShow? "Hide" : "Show"}</button>
      </header>
    </div>
  );
}

export default App;
