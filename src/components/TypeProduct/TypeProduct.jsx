import React from 'react';

const TypeProduct = ({ name }) => {
    console.log('name:', name); 
    return (
        <div>{name}</div> // cần thì bỏ name vào trong thẻ div
    );
};

export default TypeProduct;
