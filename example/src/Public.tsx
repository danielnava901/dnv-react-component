import React from 'react';
import {
  Main,
  Header
} from './reactComponentLib';


interface PublicInterface {
};

const Public : React.FC<PublicInterface> = (props) => {
  return (
  <Main>
    <Header items={[{id: 1, caption: "Nosotros", path: "/us"}, {id: 2, caption: "Entrar", path: "/login"}]} />
  </Main>
  );
};


export default Public;