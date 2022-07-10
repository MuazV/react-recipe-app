import styled from 'styled-components';

const StyledLogin = styled.form`
background-color: rgba(4,173,191,0.7);
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
background-color: #04D9C4;
border: none;
color: #023373;
&.submit {
    cursor: pointer;
}
&.submit:hover {
    transform: scale(0.95);
}
`;

export const LoginDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #023373;
height: 100vh;
background-image: url("https://picsum.photos/1600/900");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

export default StyledLogin;