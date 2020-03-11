import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer
} from '../StyledComponents';

interface HeaderInterface {
  items: Array<any> ,
  logo?: string,
  bgColor?: string | undefined,
  color?: string | undefined,
  padding?: string | undefined 
};

const Header : React.FC<HeaderInterface> = (props) => {
  let isImg: boolean = props.logo ? (props.logo.indexOf('png') >= 0 || props.logo.indexOf('data:image') >= 0) : false;

  return <HeaderContainer bgColor={props.bgColor || 'black' } color={props.color || "white" } padding={props.padding || '30px'}>
    <div className="logo">
      {
        isImg ? <Link to="/"><img src={props.logo} alt="logo"/></Link> : <Link to="/"><div>{props.logo}</div></Link>
      }
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