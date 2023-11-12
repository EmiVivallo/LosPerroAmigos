import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link en lugar de link
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Swal from 'sweetalert2'; // Importa sweetalert2 correctamente
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const Show = () => {
  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, 'products');

  const getProducts = async () => {
    const data = await getDocs(productsCollection);

    setProducts(
      data.docs.map((doc) => ({
        id: doc.id, // Asegúrate de obtener correctamente el ID del documento
        ...doc.data(), // Incluye los datos del documento
      }))
    );
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc);
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='d-grid gap-2'>
            {/* Utiliza Link en lugar de link */}
            <Link to='/create' className='btn btn-secondary mt-2 mb-2'>
              Create
            </Link>
          </div>

          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Aula</th>
                <th>Materia</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.aula}</td>
                  <td>{product.materia}</td>
                  <td>
                    {/* Utiliza Link en lugar de link */}
                    <Link to={`/edit/${product.id}`} className='btn btn-light'>
                      <i className='fa-solid fa-pencil'></i>
                    </Link>
                    <button
                      onClick={() => {
                        deleteProduct(product.id);
                      }}
                      className='btn btn danger' // Debería ser btn-danger
                    >
                      <i
                        className='fa-solid fa-trash'
                        style={{ color: '#b71a1a' }}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
