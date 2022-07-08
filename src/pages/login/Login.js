import React, { useState } from 'react';
import StyledLogin, { LoginDiv, LoginH1, LoginInput } from './style';
import {useNavigate} from 'react-router-dom';

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
        <LoginH1>ED8EN RECIPE</LoginH1>
        <LoginInput type="text" placeholder='USERNAME' required onChange={(e) => setUsername(e.target.value)} />
        <LoginInput type="password" placeholder='PASSWORD' required onChange={(e) => setPassword(e.target.value) }/>
        <LoginInput type="submit" value="LOGIN" />
    </StyledLogin>
    </LoginDiv>
  )
}

export default Login;