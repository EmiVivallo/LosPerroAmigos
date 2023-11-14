import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig'


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
    navigate('/')
  }

  const getProductById = async (id) => {

  }

  useEffect( () => {
    getProductById(id)
  }, [ ])

  return (
    <div>Edit</div>
  )
}

export default Edit