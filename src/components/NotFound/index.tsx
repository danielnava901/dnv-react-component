import React from 'react';
import {NotFoundContainer, Main} from '../StyledComponents';


const NotFound : React.FC= () => {
  return <Main>
      <NotFoundContainer>
        <div className="title">404</div>
        <div className="text">Not found</div>
    </NotFoundContainer>
  </Main>
};


export default NotFound;