import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer
} from '../StyledComponents';

interface HeaderInterface {
  items: Array<any> 
};

const Header : React.FC<HeaderInterface> = (props) => {
  return <HeaderContainer>
    <div className="logo">
      <div>LOGO</div>
    </div>
    <div className="menu">
      {
        props.items.map((item: any, index: number) => {
          return <div key={index} className="item"><Link to={item.path}>{item.caption}</Link></div>
        })
      }
    </div>
  </HeaderContainer>
};


export default Header;