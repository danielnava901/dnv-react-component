import React from 'react';

import { SpanError } from '../StyledComponents';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Card from '../CardDNV';


const formSchema = Yup.object().shape({
  email: Yup.string(),
  username: Yup.string(),
  password: Yup.string().min(8, "Mínimo 8 caractéres").required('Este campo es obligatorio'),
  confirmPassword: Yup.string().min(8, "Mínimo 8 caractéres")
        .oneOf([Yup.ref('password'), null], 'La confirmación no coincide')
        .required('Este campo es obligatorio')
});


interface FormResetPasswordInterface {
  heading?: string,
  password?: string,
  email?: string,
  confirmPassword?: string,
  onChange: (ev: any) => void,
  onSend: (a: any) => void
};

const FormResetPassword : React.FC<FormResetPasswordInterface> = (props) => {

  
  const formik: any = useFormik({
    initialValues: {
        email: props.email,
        password: props.password,
        confirmPassword: props.confirmPassword
    },
    validationSchema: formSchema,
    onSubmit: props.onSend
});


  return <Card heading={props.heading}> 
    <form action="#" onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-sm-12">
          
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  onChange={() => {}}
                  value={formik.values.email}
                  readOnly={true}
                  />            
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                  type="password" 
                  id="password" 
                  className="form-control" 
                  onChange={formik.handleChange}
                  value={formik.values.password}
              />
              {formik.errors.password ? <SpanError>{formik.errors.password}</SpanError> : null}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirma contraseña</label>
              <input 
                  type="password" 
                  id="confirmPassword" 
                  className="form-control" 
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword ? <SpanError>{formik.errors.confirmPassword}</SpanError> : null}
            </div>

            <div className="form-group">
              <input type="submit" className="btn btn-primary" style={{width: "100%"}} />
            </div>
        </div>
      </div>
    </form>
  </Card>
};


export default FormResetPassword;