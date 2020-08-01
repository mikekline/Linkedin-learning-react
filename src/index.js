import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function App() {
    const [year, setYear] = useState(2050);
    const [manager, setManager] = useState("Mike");
    const [status, setSatus] = useState("Open");
    return (
        <>
        <div>
    <h1>{year}</h1>
    <button onClick={() => setYear(year +1)}>New Year!</button>
        </div>
        <div>
            <h1>Manager on Duty: {manager}</h1>
            <button onClick={() => setManager("Bob")}>New Manager</button>
        </div>
        <div>
            <h1>Status: {status}</h1>
            <button onClick={() => setSatus("Open")}>
                Open
            </button>
            <button onClick={() => setSatus("Back in 5")}>
                On Break
            </button>
            <button onClick={() => setSatus("Closed")}>
                Closed
            </button>
        </div>
    </>
    );
}
function Checkbox() {
    const [checked, setChecked] = useState(false);
    //not part of render/return is call effects
    useEffect(() => {
        alert(`checked: ${checked.toString()}`);
    });

    return (
        <>
        <input type="checkbox"
        value={checked} 
        onChange={() =>
            setChecked(checked => !checked)
            }
        />
        {checked ? "checked" : "not checked"}
        </>
    )
}

function Checkbox2() {
    const [checked, toggle] = useReducer(
        checked => !checked,
        false
    );
 

    return (
        <>
        <input type="checkbox"
        value={checked} 
        onChange={toggle}
        />
        {checked ? "checked" : "not checked"}
        </>
    )
}

function Phrase() {
    const [val, setVal] =useState("");
    const [val2, setVal2] =useState("");

    useEffect(() => {
        console.log(`field 1: ${val}`);
    }, [val])//<----trigers

    useEffect(() => {
        console.log(`field 2: ${val2}`);
    }, [val, val2])//<----trigers

    return (
    <>
    <label>
        Favorite Phrase:
        <input 
        value={val} 
        onChange={e => setVal(e.target.value)}
        />
    </label>
    <br />
    <label>
        Favorite Phrase:
        <input 
        value={val2} 
        onChange={e => setVal2(e.target.value)}
        />
    </label>
    </>
    );
}

function GithubUser ({login}) {
    const [data, setData] = useState(null);
    useEffect (() =>{
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    },[]);

    if(data) {
    return (
    <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
        {JSON.stringify(data)}
    </div>
      );
    }
    return null;
}

function GithubApp(){
    return <GithubUser login="mikekline" />
}


ReactDOM.render(
    <>
    <App />
    <Checkbox />
    <br />
    <Checkbox2 />
    <br />
    <Phrase />
    <br />
    <GithubApp />
    </>,
  document.getElementById('root')
);


