import axios from "axios";
import React from "react";
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom';
import instance from '../../Axios';
import { useContext, useState, useEffect } from 'react';

function Register() {

    const navigate = useNavigate();
  
    const [formValue, setformValue] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const [errorUsername,setErrorUsername] = useState();
    const [errorEmail,setErrorEmail] = useState();
    const [errorPassword,setErrorPassword] = useState();
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const registerData = new FormData();
      registerData.append("username", formValue.username)
      registerData.append("email", formValue.email)
      registerData.append("password", formValue.password)

      if(registerData.username == undefined)
        {
          setErrorUsername('Nazwa użytkownika może zawierać litery, cyfry i znaki @ . + - _');
        }
        else setErrorUsername('');
  
      if(registerData.email == undefined)
        {
          setErrorEmail('Proszę podać poprawny adres email');
        }
        else setErrorEmail(''); 
  
      if(registerData.password == undefined)
        {
          setErrorPassword('Hasło musi składać się z 8 znaków oraz zawierać litery i cyfry');
        }
        else setErrorPassword(''); 
  
      try {
        const response = await instance({
          method: "post",
          url: "http://127.0.0.1:8000/chmura/users/", 
          data: registerData,
          headers: { "Content-Type": "application/json" },
        }).then(() => {     
            navigate('/login');
    });
      } catch(error) {
        console.log(error)
      }
    }

    
  
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
  
      
    return (
      <div className="Register">
      <h1>Zarejestruj się</h1>
  
      <form className='RegisterForm' onSubmit={handleSubmit}>
      {/* <div className='formContainer'> */}
        <label className='registerLabel'> Nazwa użytkownika:
        {errorUsername?<label className='errorRegister'>{errorUsername}</label>:null} 
          <input type="text" name="username"  onChange={handleChange}/>
        </label>
  
        <label className='registerLabel'> Adres Email:
        {errorEmail?<label className='errorRegister'>{errorEmail}</label>:null} 
          <input type="email" name="email"  onChange={handleChange}/>
        </label>
  
        <label className='registerLabel'> Hasło
        {errorPassword?<label className='errorRegister'>{errorPassword}</label>:null} 
          <input type="password" name="password"  onChange={handleChange}/>
        </label>
  
        <input type="submit" className='registerbtn' value="Wyślij" />
      {/* </div> */}
      </form>
    </div>
      )
  }
  
  export default Register;