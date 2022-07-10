import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from './style'

const Details = () => {

const navigate = useNavigate()

  return (
    <div>Details
    <StyledButton onClick={()=> navigate('/home')}>Home</StyledButton>
    <StyledButton primary onClick={() => navigate(-1)}>Go Back</StyledButton>
    </div>
  )
}

export default Details