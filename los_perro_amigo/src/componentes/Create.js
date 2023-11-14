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
    navigate('/show')
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='contenedor-create'>
          <h1 className='tit-create'>Crear clase</h1>

            <form onSubmit={store}>
              <div className='mb-3'>
                <label className='form-label'>Aula</label>
                <input value={aula} onChange={ (e)=> setAula(e.target.value)} type='number' className='form-control' />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Materia</label>
                <input value={materia} onChange={ (e)=> setMateria(e.target.value)} type='text' className='form-control' />
              </div>
              <div className='tit-edit'>
              <button type='submit' className='btn btn-primary'>Crear</button></div>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Create