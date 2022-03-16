import React, {Component, useEffect, useState} from "react";

const Home = (props) => {
    const [name, setName] = useState('not changed');

    // useEffect(() => {
    //     return props.parentCallback('home');
    // },[]);

    const stateChange = () => {
        setName('Changed');
        props.parentCallback('Sending Data from child to parent');
        console.log('hi', props.parentCallback);
    }

    return (
    <div className="div">
        <h1 className="text-3xl font-bold underline"> Home! {props.title} </h1>
        <h1 className="text-3xl font-bold"> state {name}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => stateChange()}>click to change state</button>
    </div>
    )
}

export default Home;