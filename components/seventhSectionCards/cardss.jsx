import React from 'react'

const Cards = (props) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold pb-2">{props.title}</h2>
            <p className="text-gray-600 py-2">{props.description}</p>

        </div>
    );
};

export default Cards;