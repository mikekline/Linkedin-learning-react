import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}) {
  return <h1>{name}</h1>;
}

const lakeList = [
  {id: "1", name:"Moraine Lake", trailhead: "canoe docks"},
  {id: "2", name:"Lake Louise", trailhead: "parking lot"},
  {id: "3", name:"Lake Minowanka", trailhead: "parking lot"}
  /*"Moraine Lake",
  "Lake Louise",
  "Lake Minowanka"*/
];

const list = [1,2,3,4,5];

function App({lakes}, {items}) {
  //top one best way

  return (
  <div>
    <div>
    {lakes.map(lake => (
      <div key={lake.id}>
        <h2>{lake.name}</h2>
        <p> Accessed by: {lake.trailhead}</p>
      </div>
    ))}
  </div>,
  <ul>
    {items.map(item => (
    <li key={item.toString()}>iiiii{item}</li>
    ))}
  </ul>,
  <ul>
  {items.map((item, i) => (
    <li key={i}>gfh{item}</li>
  ))}
</ul>
  
 </div> );
}

/*function 2 App({lakes}) {
  return (
  <ul>
    {lakes.map(lake => (
      <li>{lake}</li>
    ))} 
  </ul>
  );
}*/



/*function App() {
  return (
  <div>
    <Lake name="Moraine Lake" />
    <Lake name="Lake Louise" />
    <Lake name="Lake Minowanka" />
  </div>
  );
}*/


let city = {
  name:"canmore",
  province:"alberta"
};
//BELOW GOES IN FUNCTION WHEN USING (PROPS) PROPERTY ARGUMENT
//console.log(Object.keys(props));
//p>{Object.keys(props).length} properties total</p>
function Hello({library, message, number}) {
  return (
  <div>
    <h1>Wecome to Hello World!</h1>
  <h2>Hello World! Messing with {library}</h2>
    <ul>
      <li>Hot Dogs</li>
      <li>Hamburgers</li>
      <li>Pizza</li>
      <li>Sushi</li>  
    </ul>
  
    <p>{message}</p>
  <p>the answer is {number}</p>
    <h1 id="heading" className="cool-text">Hello from {city.name}, {city.province}!</h1> 
  </div>
  );
}

ReactDOM.render(
  //React.createElement("h1", {style: {color: "blue"}}, "Hello World!"),
 // <h1>Hello World!</h1>
  /*<ul>
    <li>Hot Dogs</li>
    <li>Hamburgers</li>
    <li>Pizza</li>
    <li>Sushi</li>  
  </ul>,*/
//<h1 id="heading" className="cool-text">Hello from {city.name}, {city.province}!</h1> 
  
  /*<Hello 
    library="React" 
    message="Have fun!"
    number={42} 
  />,*/
  <App lakes={lakeList} items={list} />,
  document.getElementById('root')
);


