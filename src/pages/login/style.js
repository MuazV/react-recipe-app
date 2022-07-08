import styled from 'styled-components';

const StyledLogin = styled.form`
background-color: rgba(173,216,230,0.7);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
width: 450px;
height: 450px;


`;

export const LoginH1 = styled.h1`
font-size:2rem;

`;
export const LoginImg = styled.img`
    width: 150px;
    height: 150px;
`;

export const LoginInput = styled.input`
padding:0.5rem;
font-size: 1rem;
`;

export const LoginDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url("https://picsum.photos/1600/900");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

export default StyledLogin;