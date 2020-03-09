import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Modal from '../Modal';
import { SpanError } from '../StyledComponents'

const formSchema = Yup.object().shape({
  email: Yup.string().email("Formato de correo incorrecto").required('Este campo es obligatorio')
});


interface FormRecoveryInterface {
  email?: string,
  onSend: () => void,
  onClose?: () => void 
};

const FormRecovery : React.FC<FormRecoveryInterface> = (props) => {
  
  const formik: any = useFormik({
    initialValues: {
        email: props.email,
    },
    validationSchema: formSchema,
    onSubmit: props.onSend
});

  return (
    <Modal title="Recuperar contraseña" onClose={(typeof props.onClose === "function") ? props.onClose : () => {}}>
      <form action="#" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" 
                onChange={formik.handleChange}
                value={formik.values.email}
                />
              {formik.errors.email ? <SpanError>{formik.errors.email}</SpanError> : null}
            </div>
            
            <div className="form-group">
              <input type="submit" className="btn btn-primary" style={{width: "100%"}} />
            </div>
            
          </div>
        </div>
      </form>
    </Modal>
  );
};


export default FormRecovery;