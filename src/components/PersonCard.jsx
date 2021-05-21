import React from 'react';

const PersonCard = (props) => {
    console.log(props);

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <hr />
        </div>
    )
}

export default PersonCard;