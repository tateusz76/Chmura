import './Login.css'
import { useContext, useState } from 'react';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import instance from '../../Axios';

function Login() {

    const [formValue, setformValue] = React.useState({
      email: '',
      password: '',
    });
  
    const [errorMessage,setError]=useState();
    const navigate = useNavigate();
  
    //CZY ZALOGOWANY
    const [isAuthenticated, setAuthenticated] = useState(() => {
      const token = sessionStorage.getItem("access");
      if(token !== null) console.log("zalogowany")
      else console.log("wylogowany")
    });
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const loginData = new FormData();
      loginData.append("email", formValue.email)
      loginData.append("password", formValue.password)
  
      try {
        const response = await instance({
          method: "post",
          url: "http://127.0.0.1:8000/chmura/token/",
          data: loginData,
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {     
          sessionStorage["access"]=res.data.access
          sessionStorage["refresh"]=res.data.refresh
          navigate('/files');
    });
      } catch(error) {
        console.log(error)
        setError('Wystąpił błąd podczas logowania, upewnij się, że podałeś poprawne dane logowania.')
      }
  
    }
  
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
  
      
    return (
      <div className="Login">
      <h1>Zaloguj się</h1>
  
      <form className='loginForm' onSubmit={handleSubmit}>
        <label className='labelForm'> Adres email:
          <input type="text" name="email"  onChange={handleChange}/>
        </label>
        <label className='labelForm'> Hasło:
          <input type="password" name="password"  onChange={handleChange}/>
        </label>
          <input type="submit" className='submitbtn' value="Wyślij" />
      </form>

      <p>Nie jesteś zarejestrowanym użytkownikiem?</p><Link  to='/register'>Zarejestruj się</Link>
      {errorMessage?<label className='loginError'>{errorMessage}</label>:null} 
    </div>
      )
  }
  
  export default Login;