import React from 'react';

import { SpanError } from '../StyledComponents';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Card from '../CardDNV';


const formSchema = Yup.object().shape({
  email: Yup.string().email("Formato de correo incorrecto").required('Este campo es obligatorio'),
  password: Yup.string().min(8, "Mínimo 8 caractéres").required('Este campo es obligatorio'),
  username: Yup.string().required("Este campo es obligatorio"),
  confirmPassword: Yup.string().min(8, "Mínimo 8 caractéres")
        .oneOf([Yup.ref('password'), null], 'La confirmación no coincide')
        .required('Este campo es obligatorio')
});


interface FormRegisterInterface {
  heading?: string,
  email?: string,
  password?: string,
  username?: string,
  confirmPassword?: string,
  onChange: (ev: any) => void,
  onSend: (a: any) => void
};

const FormRegister : React.FC<FormRegisterInterface> = (props) => {

  
  const formik: any = useFormik({
    initialValues: {
        email: props.email,
        password: props.password,
        username: props.username,
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
              <label htmlFor="username">Nombre de usuario</label>
              <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  className="form-control"
              />
              {formik.errors.username ? <SpanError>{formik.errors.username}</SpanError> : null}
            </div>  
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  />
              {formik.errors.email ? <SpanError>{formik.errors.email}</SpanError> : null}
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


export default FormRegister;