import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';



export const FormLogin = () => {
    const [formSucces, setFormSucces] = useState(false)

    return (

        <div className='row d-flex justify-content-center mt-5'>
            <Formik
                initialValues={{
                    name: '',
                    email: ''
                }}
                validate={(valores) => {
                    const errores = {}
                    if (!valores.name) {
                        errores.name = 'Por favor ingresa un nombre';
                    }
                    if (!valores.email) {
                        errores.email = "Por favor ingresa un email"
                    }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    setFormSucces(true);
                    setTimeout(() => {
                        setFormSucces(false)
                    }, 3000);
                }}
            >
                {({ errors }) => (
                    <Form className='col-4 bg-white rounded p-5'>
                        <div className='form-group m-3'>
                            <label htmlFor='name'>Email</label>
                            <Field type='text'
                                autoComplete='off'
                                className='form-control'
                                id='name'
                                name='name'
                            />
                            <ErrorMessage name='name' component={() => (
                                <small className='text-danger'>{errors.name}</small>
                            )} />
                        </div>
                        <div className='form-group m-3'>
                            <label htmlFor='email'>Password</label>
                            <Field type='text'
                                autoComplete='off'
                                className='form-control'
                                id='email'
                                name='email'
                            />

                            <ErrorMessage name='email' component={() => (
                                <small className='text-danger'>{errors.email}</small>
                            )} />
                        </div>
                        <div className='form-group m-3'>
                            <button type='submit' className='btn btn-danger btn-block'>Enviar</button>
                        </div>
                        {formSucces && (
                            <div className='d-flex justify-content-center'>
                                <p className='text-success'>Formulario enviado con exito</p>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    )
}
