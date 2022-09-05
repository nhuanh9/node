import React, {useState} from "react";

//Thêm mới một sản phẩm có: name, price
//Ấn nút thì hiện thông tin
export default function DemoForm() {
    const [product, setProduct] = useState({})
    const [isValidName, setIsValidName] = useState(false)
    const [isValidPrice, setIsValidPrice] = useState(false)

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })

        if (!product.name) {
            setIsValidName(true)
        } else {
            setIsValidName(false)
        }
        if (!product.price) {
            setIsValidPrice(true)
        } else {
            setIsValidPrice(false)
        }
    }
    const handleSubmit = () => {

    }

    return (

        <div>
            {<div>
                <p>name: {product.name}</p>
                <p>price: {product.price}</p>
            </div>}

            <h1>Demo form</h1>
            <label>Name:</label>
            <input type="text" name="name" onChange={e => {
                handleChange(e)
            }}/>
            {isValidName && <span>Name is require</span>}
            <label>Price:</label>
            <input type="number" name="price" onChange={e => {
                handleChange(e)
            }}/>
            {isValidPrice && <span>Price is require</span>}
            <button onClick={() => handleSubmit()}>Submit</button>

        </div>
    )
}
