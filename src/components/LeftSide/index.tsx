import React from 'react';
import {LeftSideContainer} from '../StyledComponents';

interface LeftSideInterface {
  imgSrc: string
}

const LeftSide: React.FC<LeftSideInterface> = ({ imgSrc, children }) => <LeftSideContainer>
  <div className="LeftSideHeader">
    <div className="logo">
      <img src={imgSrc} alt=""/>
    </div>
  </div>
  { children }
</LeftSideContainer>;

export default LeftSide;