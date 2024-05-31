import React from 'react'

const Card = (props) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold pb-2">{props.title}</h2>
            <p className="text-gray-600 py-2">{props.description1}</p>
            <p className="text-gray-600">{props.description2}</p>
        </div>
    );
};

export default Card;
