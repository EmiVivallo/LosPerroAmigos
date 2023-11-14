import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'

import { db } from '../firebaseConfig'

const Create = () => {
  const [ aula, setAula ] = useState(0)
  const [ materia, setMateria ] = useState('')
  const navigate = useNavigate()

  return (
    <div>Create</div>
  )
}

export default Create