import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, updateDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Show = () => {
  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, "products");

  const getProducts = async () => {
    const q = query(productsCollection, orderBy('aula'));
    const data = await getDocs(q);

    setProducts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const updateProductStatus = async (id, isActive) => {
    const productDoc = doc(db, 'products', id);
    await updateDoc(productDoc, { activo: isActive });
    getProducts();
  };

  const deactivateProduct = (id) => {
    MySwal.fire({
      title: '¿Desactivar la clase?',
      text: 'Puedes activarla nuevamente más tarde',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: "Sí, desactivar"
    }).then((result) => {
      if (result.isConfirmed) {
        updateProductStatus(id, false);
        Swal.fire(
          'Desactivada',
          'Clase desactivada',
          'success'
        );
      }
    });
  };

  const activateProduct = (id) => {
    MySwal.fire({
      title: '¿Activar la clase?',
      text: 'Puedes desactivarla nuevamente más tarde',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#3085d6',
      confirmButtonText: "Sí, activar"
    }).then((result) => {
      if (result.isConfirmed) {
        updateProductStatus(id, true);
        Swal.fire(
          'Activada',
          'Clase activada',
          'success'
        );
      }
    });
  };

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
                  <tr key={product.id} className={product.activo ? '' : 'table-danger bg-more-red'}>
                    <td style={{ textDecoration: product.activo ? 'none' : 'line-through' }}>{product.aula}</td>
                    <td style={{ textDecoration: product.activo ? 'none' : 'line-through' }}>{product.materia}</td>
                    <td>
                     {product.activo ? (
                      <>
                      <Link to={`/edit/${product.id}`} className='btn btn-light'><i className='fa-solid fa-pencil'></i></Link>
                        <button onClick={() => { deactivateProduct(product.id) }} className='btn btn-warning'><i className='fa-solid fa-pause'></i></button>
                      </>
                      ) : (
                        <button onClick={() => { activateProduct(product.id) }} className='btn btn-success'><i className='fa-solid fa-play'></i></button>
                      )}
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
