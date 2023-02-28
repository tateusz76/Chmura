import './App.css';
import {useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Flow/Register/Register';
import Login from './Flow/Login/Login';
import Files from './Flow/Files/Files';

function App() {

  let [isLoggedIn, setLoggedStatus] = useState();

    if(sessionStorage.getItem("access"))
    {
        isLoggedIn = true;
    }
    else
    {
      isLoggedIn = false;
    }


  return (
    <div className="App">
      <Routes>
      {isLoggedIn == false ? 
                <Route exact path="/*" element={<Login/>} /> :
                <Route path="/" element={<Files />} />}
            <Route exact path="register" element={<Register/>} />
            <Route exact path="login" element={<Login/>} />
            <Route exact path="files" element={<Files/>} />
            
      </Routes>
    </div>
  );
}

export default App;
