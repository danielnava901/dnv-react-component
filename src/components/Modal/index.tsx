import React from 'react';
import { ModalContainer } from '../StyledComponents';


interface ModalInterface {
  title: any,
  onClose: () => void,
  footer?: any
};

const Modal : React.FC<ModalInterface> = (props) => {
  return <ModalContainer>
      <div className="Modal container">
          <div className="header ">
              <div className="title ">{props.title}</div>
              <div className="close " onClick={() => {props.onClose()}}><span>&times;</span></div>
          </div>
          <div className="body">
              {props.children}
          </div>
          {
            props.footer ? 
              <div className="footer">
              {props.footer}
              </div> : null
          }
      </div>
    </ModalContainer>
};


export default Modal;