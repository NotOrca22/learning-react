import React from 'react';

import classes from './Person.css';

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        {props.name} is {props.age} years old.
      </p>
      <p>{props.children}</p>
      Name: <input type="text" onChange={props.changed} value={props.name} /> 
      <br></br>
       Age: <input type="text" onChange={props.changed2} value={props.age} />
    </div>
  );
};

export default person;