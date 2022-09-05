import './App.css';
import React from "react";
import FormikValidate from './pages/Formik';
import FormYup from './pages/FormYup';
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import DemoForm from "./pages/Form";
import TestParam from "./pages/TestParam";
import AppContext from "./pages/AppContext";
import ListProduct from "./pages/product/list";
import AddProduct from "./pages/product/create";

const globalState = [
    {
        name: 'IP12',
        price: 100
    },
    {
        name: 'IP13',
        price: 100
    }
]

function App() {
    return (
        <AppContext.Provider value={globalState}>
            <div>
                <Routes>
                    <Route path={'/products'} element={<ListProduct></ListProduct>}></Route>
                    <Route path={'/products/create'} element={<AddProduct></AddProduct>}></Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
