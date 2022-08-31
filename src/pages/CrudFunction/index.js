import React, {useEffect, useState} from "react";

function CrudFunction() {
    const [list,setList]= useState([
        {
            name: 'IP10',
            price: 1000
        },
        {
            name: 'IP11',
            price: 1100
        }
    ])

    const [product, setProduct] = useState({
        name: '',
        price: ''
    })
    const [indexEdit, setIndexEdit] = useState(-1)
    const handleChange= (e) => {
        setProduct({
            ...product, [e.target.name]: e.target.value
        })
    }

    useEffect(()=> {
        console.log("chạy sau render")
    })

    useEffect(()=> {
        console.log("Chạy 1 lần sau mount")
        return () => {

        }
    }, [])


    useEffect(()=> {
        console.log("Thay đổi khi state/props trong đối số thay đổi")
    }, [indexEdit])
    return (

        <div>
            Name of state product: {product.name}
            <br/>
            Price of state product: {product.price}
            <br/>
            <input
                type="text"
                name={'name'}
                value={product.name}
                onChange={handleChange}/>
            <input
                type="text"
                name={'price'}
                value={product.price}
                onChange={handleChange}/>
            {list.map((ele, index) => (
                <div>
                    {ele.name} có giá là {ele.price}
                    <button onClick={() => {
                        // this.handleDelete(index)
                    }}>
                        Delete
                    </button>
                    <button onClick={() => {
                        // this.handleEdit(index)
                    }}>
                        Edit
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CrudFunction;
