import React, {useState} from "react";
import {Field, Form, Formik} from "formik";

export default function FormExercise() {
    const [list, setList] = useState([
        {
            title: 'Apple',
            amount: 12
        },
        {
            title: 'Samsung',
            amount: 15
        }
    ])
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [book, setBook] = useState(
        {
            title: '',
            amount: ''
        }
    )
    return (
        <div>
            <h1>Library</h1>
            <Formik
                initialValues={
                    book
                }
                onSubmit={((values, form) => {
                    setList([...list, values])
                    form.resetForm();
                })}
            >
                <Form>
                    <Field name={'title'}></Field>
                    <br/>
                    <Field name={'amount'}></Field>
                    <br/>
                    <button>Save</button>
                </Form>
            </Formik>
            <br/>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Actions</th>
                </tr>
                {list.map((book, index) => (
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.amount}</td>
                        <td>
                            <button onClick={() => {
                                setBook({
                                    title: list[index].title,
                                    amount: list[index].amount
                                })
                            }}>Edit
                            </button>
                            <button onClick={() => {
                                let newList = [];
                                for (let i = 0; i < list.length; i++) {
                                    if (i != index) {
                                        newList.push(list[i]);
                                    }
                                }
                                setList(newList);
                            }}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
