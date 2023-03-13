import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
//import 'primeflex/primeflex.css';                                   // css utility
import '../design/index.css';
import '../design/flags.css';
import Input from './Input';
import MyPassword from './MyPassword';
import ButtonLogin from './ButtonLogin';


const Login = () => {
    return (
        <React.StrictMode>
            <Input></Input>
            <MyPassword></MyPassword>
            <ButtonLogin></ButtonLogin>
            <h3>Don’t you have an account, sign up </h3>
        </React.StrictMode>
    )
}

export default Login