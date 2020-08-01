import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
  return (
      <h1>Visit Moraine Lake!</h1>
  );
}

function SkiResort() {
  return (
      <h1>Visit Sunshine Village!</h1>
  );
}

/*function Lake({name}) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}

function SkiResort({name}) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}*/

function App({name}) {
  return(
    //<React.Fragment></React.Fragment>
    <>
    <h1>{name}</h1>
    <Lake />
    <SkiResort />
  </>
  );
 }

/*function App(props) {
 return(
   <div>
     {props.season ==="summer" ? (
        <Lake name="Moraine Lake!" /> 
     ) : props.season === "winter" ? (
     <SkiResort name="Sunshine Village Resort!" />
     ) : (
        <h1>Come back in the summer or winter.</h1>
     )}
   </div>
 );
}*/

/*function App(props) {
  if(props.season === "summer") {
    return <Lake name="Moraine Lake!" />
  } else if(props.season ==="winter"){
    return <SkiResort name="Sunshine Village Resort!" />
  }
}*/


ReactDOM.render(
  <>
    <Lake />
    <SkiResort />
    <App name="Resorts" />
  </>,
  
  //<App season="summer" />,
  document.getElementById('root')
);


