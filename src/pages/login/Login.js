import React, { useState } from 'react';
import StyledLogin, { LoginDiv, LoginH1, LoginInput, LoginImg } from './style';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/meal2.svg'

const Login = () => {
const [username, setUsername] = useState()
const [password, setPassword] = useState("")

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home')
}

console.log(username);
console.log(password);
  return (
    <LoginDiv>
    <StyledLogin onSubmit={handleSubmit}>
        <LoginImg src={logo} alt="meal" />
        <LoginH1>{"<ED8EN/>"} <span>RECIPE<span/></span></LoginH1>
        <LoginInput type="text" placeholder='USERNAME' required onChange={(e) => setUsername(e.target.value)} />
        <LoginInput type="password" placeholder='PASSWORD' required onChange={(e) => setPassword(e.target.value) }/>
        <LoginInput className='submit' type="submit" value="LOGIN" />
    </StyledLogin>
    </LoginDiv>
  )
}

export default Login;