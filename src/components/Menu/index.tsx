import React from 'react';
import { MenuContainer } from '../StyledComponents';

interface MenuItemsInterface {
  id: number,
  available: boolean,
  caption: string,
  path: string
}

interface MenuPropsInterface {
    items: Array<MenuItemsInterface>
}

const Menu: React.FC<MenuPropsInterface> = ({items}) => {
    return <MenuContainer>
        {
            items.filter((item) => !!Number(item.available)).map((item, index) => {
                return <div className="item" key={index}><a href="#">{item.caption}</a></div>
            })
        }
    </MenuContainer>
}

export default Menu;