import React from 'react';


interface CardDNVInterface {
    heading?: string
};

const Card : React.FC<CardDNVInterface> = (props) => {
  return <div className="panel panel-default">
    <div className="panel-heading">{props.heading || 'Entrar' }</div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>

};


export default Card;