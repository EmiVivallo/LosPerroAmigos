import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'

import { db } from '../firebaseConfig'

const Create = () => {
  const [ aula, setAula ] = useState(0)
  const [ materia, setMateria ] = useState('')
  const navigate = useNavigate()

  const productsCollection = collection(db, "products")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( productsCollection, { aula:aula, materia: materia})
    navigate('/')
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Crear Producto</h1>

            <form onSubmit={store}>
              <div className='mb-3'>
                <label className='form-label'>Aula</label>
                <input value={aula} onChange={ (e)=> setAula(e.target.value)} type='number' className='form-control' />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Aula</label>
                <input value={materia} onChange={ (e)=> setMateria(e.target.value)} type='text' className='form-control' />
              </div>

              <button type='submit' className='btn btn-primary'>Crear</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Create