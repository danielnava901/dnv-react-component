import React from 'react';
import { DivLoader, DivLoaderImg } from '../StyledComponents';

interface LoaderInterface {
  imgSrc?: string;
}

const Loader: React.FC<LoaderInterface> = props => {
  return (
    <DivLoader className="Loader">
      <DivLoaderImg className="Loader-img">
        <img src={props.imgSrc} alt="loader" />
      </DivLoaderImg>
    </DivLoader>
  );
};

export default Loader;
