import React, { useEffect } from 'react';
//import logo from '.../assets/logo.svg';
import './Cockpit.css';

const cockpit = (props) => {
    // react hook
    // call at every render virtual React render
    // execute only when persons changed, passed as parameter
    useEffect(() => {
        console.log('cockpit.js useEffect');
        //http request.. like ComponentDidMount
        setTimeout(() => {
            alert('saved data to cloud');

        },1000);
    },[props.persons]);

    // can use multiple times
    //useEffect()...
    // run only once, pass empty array
    useEffect(() => {
        console.log('cockpit.js useEffect');
        //http request.. like ComponentDidMount
        const timer = setTimeout(() => {
            alert('saved data to cloud');
        },1000);
        return (() => {
            console.log ('cockpit.js Cleanup work, run once the component removed from dom');
            clearTimeout(timer);
        });
    },[]);
    const classes = [];
    if(props.persons.length >= 1)
        classes.push('red');
    if(props.persons.length >= 0)
        classes.push('bold');
    return (

        <div>
            <header className="cockpit-header">
            {/* <img src={logo} className="cockpit-logo" alt="logo" /> */}
            <h1 className="cockpit-title">Welcome to React</h1>
        </header>
        <p className="cockpit-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={classes.join(' ')}>
            stying testing
        </p>
        <button className="bold" onClick ={props.clicked}>Hide Persons</button>
      </div>
    );
}

export default React.memo(cockpit); //memorize fuctional component, do not rerender in any prop has no change