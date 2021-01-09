import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    const classes2 = [];
    let btnClass='';
    if (props.showPersons) {
        btnClass = classes.Red
    }
    if (props.persons.length <= 2) {
        classes2.push('red');
    }
    if (props.persons.length <= 1) {
        classes2.push('bold');
    }
    return (
        <div className="cockpit">
            <h1 className={classes2.join(' ')}>
            ROOSIA BOOL WILL NOT RULE THE WORLD!
            </h1>
            <p>because he sucks.</p>
            <button className={btnClass} onClick={props.clicked.bind(this, "CREWPOSTOR")} style={props.style}>Switch Name</button>
            <br></br>
            <br></br>
            <button onClick={props.newPerson}>New Person</button>   
            <button onClick={props.deletePerson}>Delete Person</button> 
        </div>
    );
}

export default cockpit