import Navbar from "../components/Navbar.jsx";
import React, {useEffect, useState} from "react";
import Layout from "./Layout.jsx";

const CreateNewProduct = () => {

    // For setting data
    useEffect(() => {
        const characterParams = JSON.parse(localStorage.getItem('characterParams'));
        setHp(characterParams.hp);
        setWater(characterParams.water);
    }, []);

    return (
        <>
            <Layout pageTitle="Create New Product">

            </Layout>
        </>
    )
}

export default CreateNewProduct;