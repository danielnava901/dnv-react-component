import React from 'react';


interface PreLoadPageInterface {
  text?: string
};

const PreLoadPage : React.FC<PreLoadPageInterface> = (props) => {
    return <div className="row">
        <div className="col-sm-12">Cargando.......{props.text}</div>
    </div>
};


export default PreLoadPage;