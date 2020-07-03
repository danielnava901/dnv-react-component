import React from 'react';
import { MenuContainer } from '../StyledComponents';
import { Link } from 'react-router-dom';

interface MenuItemsInterface {
  id: number;
  available: boolean;
  caption: string;
  path: string;
  icon?: string;
}

interface MenuPropsInterface {
  items: Array<MenuItemsInterface>;
}

const Menu: React.FC<MenuPropsInterface> = ({ items }) => {
  return (
    <MenuContainer>
      {items
        .filter(item => !!Number(item.available))
        .map((item, index) => {
          return (
            <div className="item" key={index}>
              <i className={item.icon} />
              <Link to={item.path}>{item.caption}</Link>
            </div>
          );
        })}
    </MenuContainer>
  );
};

export default Menu;
