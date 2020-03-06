import React from 'react';


interface PreLoadPageInterface {
};

const PreLoadPage : React.FC<PreLoadPageInterface> = (props) => {
    return <div className="row">
        <div className="col-sm-12">Cargando.......</div>
    </div>
};


export default PreLoadPage;