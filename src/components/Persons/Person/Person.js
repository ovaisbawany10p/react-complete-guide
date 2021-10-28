import React, { Component } from 'react';
import { render } from 'react-dom';
import './Person.css';

const person = (props) => {
    console.log('Person.js rendering');
    return (
        <div className="Person">
            <p onClick={props.click}>I am a Person with name {props.name} and age {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} />
        </div>
    );
};

export default person;