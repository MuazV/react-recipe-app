import styled from "styled-components";

const StyledDiv = styled.div`
background-color: #04ADBF;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
& div > img {
    width: 450px;
}
& > p {
    font-weight: 700;
    font-size: 1.2rem;
    
}
& section {
    border: 2px solid #CEF09D;
    text-align: right;
    font-weight: 700;
    padding: 1rem;
}
`;

export default StyledDiv;