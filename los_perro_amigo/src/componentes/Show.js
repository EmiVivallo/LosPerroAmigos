import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom';
import { collection, getDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from "../firebaseConfig"

import Swal from 'sweetalert2'; // Importa sweetalert2 correctamente
import withReactContent from "sweetalert2-react-content"
import { appFirebase } from "../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const MySwal = withReactContent(Swal)


const auth = getAuth(appFirebase)

export const Show = () => {
    //hooks
    const [products, setProducts] = useState( [] )

    //database
    const productsCollection = collection(db, "products")

    //mostrar
    const getProducts = async () => {
        const data = await getDocs(productsCollection)

        setProducts(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
            
        )
    }

    //eliminar
    const deleteProduct = async (id) => {
        const productDoc = doc(db, 'products', id)
        await deleteDoc(productDoc)
        getProducts()
    }
    //confirmacion alert

    //useeffect
    useEffect( () => {
        getProducts();
    }, [ ]);

    return (
    <div className='container'>
                <button className="btn btn-primary" onClick={()=>signOut(auth)}>Cerrar Sesion</button>
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                    <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>
                </div>

                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Aulas</th>
                            <th>Materias</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map( (product) => (
                            <tr key={product.id}>
                                <td>{product.aula}</td>
                                <td>{product.materia}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className='btn btn-light'><i className='fa-solid fa-pencil'></i></Link>
                                    <button onClick={() => {deleteProduct(product.id)}} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}
