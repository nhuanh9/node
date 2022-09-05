import React, {useState} from "react";
import {Formik, Form, Field, FastField, ErrorMessage} from "formik";
import {useNavigate} from "react-router-dom";

export default function FormikValidate() {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Create new Product!</h1>
            <Formik
                initialValues={
                    {
                        name: '',
                        price: ''
                    }
                }
                validate={values => {
                    const errors = {};
                    if (values.name == '') {
                        errors.name = 'Required Name'
                    }
                    if (values.name.length < 2) {
                        errors.name += ' Name > 2 charaters'
                    }
                    if (values.price == '') {
                        errors.price = 'Required Price'
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    navigate("/test/1", { state: { categoryId: 1 } });
                }}
            >
                {() =>
                    (
                        <Form>
                            <Field type="text" name={'name'}/>
                            <ErrorMessage name={'name'}></ErrorMessage>
                            <Field type="text" name={'price'}/>
                            <ErrorMessage name={'price'}></ErrorMessage>
                            <button>Enter</button>
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;
    const {name} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    return (
        <div>
            {label && <label for={name}>{label}</label>}

            <input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />

            {errors.email && touched.email && errors.email}
        </div>
    );
}
