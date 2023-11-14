import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Show = () => {
  //hooks
  const [products, setProducts] = useState([]);

  //database
  const productsCollection = collection(db, "products");

  //mostrar
  const getProducts = async () => {
    const q = query(productsCollection, orderBy('aula'));

    const data = await getDocs(q);

    setProducts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  //eliminar
  const deleteProduct = async (id) => {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc);
    getProducts();
  };

  //confirmacion alert
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Borrar la clase?',
      text: 'No podrás revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire(
          'Eliminada',
          'Clase eliminada',
          'success'
        );
      }
    });
  };

  //useeffect
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='main-container'>
    <div className='container-show'>
      <div className='row'>
        <div className='col'>
          <div className='d-grid gap-2'>
            <Link to="/" className='btn btn-info'>Home</Link>
            <Link to="/create" className='btn btn-secondary mb-1'>Create</Link>
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.aula}</td>
                  <td>{product.materia}</td>
                  <td>
                    <Link to={`/edit/${product.id}`} className='btn btn-light'><i className='fa-solid fa-pencil'></i></Link>
                    <button onClick={() => { confirmDelete(product.id) }} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};
