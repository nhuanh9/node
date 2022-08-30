import * as React from "react";

class Manager extends React.Component {
    constructor() {
        super();
        this.state = {
            students: [{
                name: 'tuan',
                age: 100
            }, {
                name: 'tho trang',
                age: 10
            }],
            student: {
                name: '',
                age: 0
            },
            indexEdit: -1
        }
    }

    handleChange(e) {
        this.setState((state) => {
                state.student[e.target.name] = e.target.value
                return {
                    student: state.student
                }
            }
        )
    }

    handleSubmit() {
        if(this.state.indexEdit == -1){
            this.setState((state) => {
                return {
                    students: [...state.students, state.student],
                    student: {
                        name: '',
                        age: 0
                    }
                }
            })
        }
        else {
            this.state.students.splice(this.state.indexEdit,1, this.state.student)
            this.setState((state) => {
                return {
                    students:  state.students,
                    student: {
                        name: '',
                        age: 0
                    },
                    indexEdit: -1
                }
            })
        }

    }

    handleDelete(index) {
        this.state.students.splice(index, 1)
        this.setState({
            students: this.state.students
        })
    }

    handleEdit(index) {
        this.setState((state) => {
            return {
                student: {
                    name: state.students[index].name,
                    age: state.students[index].age,
                },
                indexEdit: index
            }
        })
    }

    render() {
        return (

            <div>
                <div>
                    name:
                    <input
                        name="name"
                        value={this.state.student.name}
                        onChange={
                            (e) => {
                                this.handleChange(e)
                            }

                        }/>
                    age:
                    <input name="age"
                           value={this.state.student.age}
                           onChange={
                               (e) => {
                                   this.handleChange(e)
                               }

                           }/>
                    <button onClick={() => {
                        this.handleSubmit()
                    }}>Save
                    </button>
                    <button>Exit</button>
                </div>
                <table>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th colSpan="2">action</th>
                    </tr>
                    {this.state.students.map((student, index) => (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                <button onClick={() => {
                                    this.handleEdit(index)
                                }}>Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    this.handleDelete(index)
                                }}>Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default Manager;
