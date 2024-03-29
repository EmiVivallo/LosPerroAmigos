import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import Swal from 'sweetalert2';


const Edit = () => {
  const [ aula, setAula ] = useState(0)
  const [ materia, setMateria ] = useState('')

  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    const product = doc(db, "products", id)
    const data = {aula:aula, materia:materia}
    await updateDoc(product, data)
    navigate('/show')
  }

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "products", id))
    if (product.exists()) {
      setAula(product.data().aula)
      setMateria(product.data().materia)
    }else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La clase no existe"
      });
    }
  }

  useEffect( () => {
    getProductById(id)
  }, [ ])

  return (
    <div className='main-container'>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='contenedor-edit'>
          <h1 className='tit-edit'>Editar clase</h1>
            <form onSubmit={update}>
              <div className='mb-3'>
                <label className='form-label'>Aula</label>
                <input value={aula} onChange={ (e)=> setAula(e.target.value)} type='number' className='form-control' />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Materia</label>
                <input value={materia} onChange={ (e)=> setMateria(e.target.value)} type='text' className='form-control' />
              </div>
              <div className='tit-edit'>
              <button type='submit' className='btn btn-primary'>Editar</button></div>
            </form>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Edit