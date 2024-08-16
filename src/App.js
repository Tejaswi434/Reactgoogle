import logo from './logo.svg';
import './App.css';
import './Components/reduxbasics.js'
import ImageUpload from './Components/ImageUpload';
import Chance from './Components/Chance';
import UploadImage from './Components/UploadImage';
import Form from './Components/Form.js';
import Projectionform from './Components/Projectionform.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import Reactgoogle from './Components/Reactgoogle'

import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import {useState} from 'react'
function App() {

  const [isLogged,setLogged] = useState(false)
 
  return (
    <div className="App">

<div> {isLogged? <Reactgoogle/>:<LoginSocialGoogle
        client_id={"556682808006-rp9f3t8d6n47tljunj6v6a1bg4q1jf7a.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          setLogged(true)
          console.log(isLogged)
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>    }
      
    </div>
    </div>
  );
}

export default App;
