import React, {useState, useEffect} from 'react'

import {link} from "react-router-dom"
import {collection, getDoc, getDocs, deleteDoc} from 'firebase/firestore'
import {db} from "../firebaseConfig"

import Swal from "sweetaler2"
import withReactContent from "sweetakert2-react-content"
const MySwal = withReactContent(Swal)


export const Show = () => {
    //hooks
    const [products, setProducts] = useState( [ ] )

    //database
    const productsCollection = collection(db, "products")
    //mostrar
    const getProducts = async () => {
        const data = await getDocs(productsCollection)
    }

    //eliminar

    //confirmacion alert

    //useeffect


    return (
    <div>Show</div>
  )
}
