import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useContext} from "react";
import AppContext from "../../AppContext";

export default function AddProduct(){
    let navigate = useNavigate();
    const list = useContext(AppContext)
    return (
        <div>
            <h1>Anywhere in your app!</h1>
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
                    list.push(values)
                    navigate("/products");
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
