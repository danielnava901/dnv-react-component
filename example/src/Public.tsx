import React from 'react';
import {
  Main,
  Header
} from './reactComponentLib';

import Login from './Login';

import { Switch, Route } from 'react-router-dom';



const Public : React.FC<any> = (props) => {

  let menuItems = [{id: 1, caption: "Nosotros", path: "/public/us"}, {id: 2, caption: "Entrar", path: "/public/login"}];
  return (
    <div style={{width: "100%"}}>
      <Header logo="DNV" items={menuItems}  />
      
      <Switch>
        <Route 
          path="/public/" 
          exact={true} 
          children={<Main>Public</Main>}
        />
        <Route 
          path="/public/login" 
          exact={true} 
          children={<Login />}
        />

        <Route 
          path="/public/us" 
          exact={true}
          children={<Main>US</Main>} 
        />
      </Switch>
    </div>
  
  );
};


export default Public;