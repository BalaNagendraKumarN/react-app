import React, {Component, useEffect, useState} from "react";

const About = (props) => {
    const [name, setName] = useState('not changed');

    // useEffect(() => {
    //     return props.parentCallback('home');
    // },[]);

    const stateChange = () => {
        setName('Changed');
        props.parentCallback('message from about');
    }

    return (
    <div className="div">
        <h1 className="text-3xl font-bold underline"> About! {props.title} </h1>
        <h1 className="text-3xl font-bold"> state {name}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => stateChange()}>click to change state</button>
    </div>
    )
}

export default About;