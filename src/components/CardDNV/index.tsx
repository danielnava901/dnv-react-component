import React from 'react';


interface CardDNVInterface {
    text?: string
};

const CardDNV : React.FC<CardDNVInterface> = (props) => {
  return <div>CARD DNV {props.text ? props.text : 'NADA'}</div>
};


export default CardDNV;