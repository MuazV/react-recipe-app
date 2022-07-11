import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../assets/404.png';
import { StyledButton } from './details/style';

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <img src={error} alt="img" />
      <div >
        <StyledButton onClick={() => navigate('/home')}>Go Home</StyledButton>
        <StyledButton primary onClick={() => navigate(-1)}>
          Go Back
        </StyledButton>
      </div>
    </div>
  )
}

export default NotFound