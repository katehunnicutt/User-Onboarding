import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import UserForm from './File'
import fileSchema from './FileSchema'
import User from './Userfile'

/// 1 form flesh out 
/// 2 schema for form  flesh out X

///// initial states /////
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,   ///checkbox
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  termsOfService: '',
}


const initialInput = []
const initialDisabled = true


function App() {

///// set states /////
  const [userData, setUserData] = useState(initialInput)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)       /// boolean


  const getUsers = () => {
    axios.get('https://reqres.in/api/users') 
    .then(res => {
      setUserData(res.data)
    })
    .catch (err => {
      console.log(err)
    })

  }

  const postUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser) 
    .then(res => {
      setUserData([res.data, ...userData])
    })
    .catch(err => {
      console.log(err)
    })
    setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(fileSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormErrors({
      ...formValues, [name]: value
    })
  }
  
  const formSubmit = () => {
    const newUser ={
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService
    }
    postUsers(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    fileSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors} 
      
      />
      {
        userData.map(user => {
          return (
            <User key = {user.id} inputData = {user} />
          )
        })
      }


    </div>
  );
}

export default App;
