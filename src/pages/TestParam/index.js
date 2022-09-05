import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router";
import AppContext from "../AppContext";
export default function TestParam() {
    let {id} = useParams()
    const { state } = useLocation();
    const list = useContext(AppContext)
    return (
        <div>
            {id}
            {list.map(item => (
                <h1>{item.name}</h1>
            ))}
        </div>
    )

}
