import React from 'react';
import './App.css';

class App extends React.Component {

  foo() {
    let arr3 = new Array(100);
    for (let i = 1; i < arr3.length + 1; i++) {
      arr3.push(i);
    }
    return arr3;
  }

  render() {
    let arr = [1, 2, 3, 4, 5];
    let arr2 = [1, 0, 1, 0];
    return (
      <div>
        <div>{Math.floor(Math.random() * (61 - 50) + 50)}</div>
        <hr />
        <div style={{ backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` }}>backgroundColor</div>
        <hr />
        <ul>
          {arr.map(item => {
            return <li key={item}><p>{item}</p></li>
          })}
        </ul>
        <hr />
        <div>
          {arr2.map(item => {
            if (item === 1) {
              return <div className="white">{item}</div>
            } else {
              return <div className="black">{item}</div>
            }
          })}
        </div>
        <hr />
        <div>
          {this.foo().map(item => {
            return <span>{item} </span>
          })}
        </div>
      </div>
    );
  }
}

export default App;
