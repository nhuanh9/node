import * as React from "react";

class CRUD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'IP10',
                    price: 1000
                },
                {
                    name: 'IP11',
                    price: 1100
                }
            ],
            product: {
                name: '',
                price: ''
            },
            indexEdit: -1
        }
    }

    handleChange(e) {
        this.setState((state) => {
                return {
                    product: {...state.product, [e.target.name]: e.target.value}
                }
            }
        )
    }

    handleSave() {
        if (this.state.indexEdit ==-1) {
            this.setState((state) => {
                    return {
                        list: [...state.list, state.product],
                        product: {
                            name: '',
                            price: ''
                        }
                    }
                }
            )
        } else {
            this.setState((state) => {
                state.list[state.indexEdit] = state.product;
                    return {
                        list: state.list,
                        product: {
                            name: '',
                            price: ''
                        }
                    }
                }
            )
        }
    }

    handleDelete(index) {
        this.setState((state) => {
                state.list.splice(index, 1);
                return {
                    list: state.list
                }
            }
        )
    }
    handleEdit(index) {
        this.setState((state) => {
                return {
                    product: state.list[index],
                    indexEdit: index
                }
            }
        )
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name={'name'}
                    value={this.state.product.name}
                    onChange={(e) => {
                        this.handleChange(e)
                    }}/>
                <input
                    type="text"
                    name={'price'}
                    value={this.state.product.price}
                    onChange={(e) => {
                        this.handleChange(e)
                    }}/>
                <button onClick={
                    () => {
                        this.handleSave()
                    }
                }>Save
                </button>
                <hr/>
                {this.state.list.map((ele, index) => {
                    return (
                        <div>
                            {ele.name} có giá là {ele.price}
                            <button onClick={() => {
                                this.handleDelete(index)
                            }}>
                                Delete
                            </button>
                            <button onClick={() => {
                                this.handleEdit(index)
                            }}>
                                Edit
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }


}

export default CRUD;
