import React from 'react';
import { useFormik } from "formik";
import { SpanError } from '../StyledComponents';

import * as Yup from 'yup';
import Card from '../CardDNV';


const formSchema = Yup.object().shape({
  email: Yup.string().email("Formato de correo incorrecto").required('Este campo es obligatorio'),
  password: Yup.string().min(8, "Mínimo 8 caractéres").required('Este campo es obligatorio'),
});


interface FormLoginDNV {
  heading?: string,
  email?: string,
  password?: string,
  onChange: (ev: any) => void,
  onSend: (a: any) => void,
  onClickRecovery?: () => void
};

const FormLogin : React.FC<FormLoginDNV> = (props) => {

  const formik: any = useFormik({
    initialValues: {
        email: props.email,
        password: props.password,
    },
    validationSchema: formSchema,
    onSubmit: props.onSend,
});


  return <Card heading={props.heading}> 
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
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" className="form-control" 
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? <SpanError>{formik.errors.password}</SpanError> : null}
            </div>

            <div className="form-group">
              <input type="submit" className="btn btn-primary" style={{width: "100%"}} />
            </div>
            <div className="form-group">
                <div className="col-sm-12 text-right">
                    <a className="stretched-link" style={{cursor: "pointer"}} onClick={props.onClickRecovery}>Recuperar contraseña</a>
                </div>
            </div>
          </div>
        </div>
      </form>
  </Card>
};


export default FormLogin;