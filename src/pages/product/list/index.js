import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useLocation} from "react-router";
import AppContext from "../../AppContext";

export default function ListProduct() {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [list, setList] = useState(useContext(AppContext))
    const handleDelete = (index) => {
        list.splice(index, 1);
        setList(list)
        navigate("/products");
    }
    return (
        <div>
            <h2>List Products:</h2>
            <Link to={'create'}>Create</Link>
            {list.map((item, index) => (
                <h3 key={index}>
                    {item.name}: {item.price}$
                    <button onClick={handleDelete}>Delete</button></h3>
            ))}
        </div>
    )

}
