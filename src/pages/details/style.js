import styled from "styled-components";
/* Color Theme Swatches in Hex */

export const StyledButton = styled.button`
    background-color: ${({primary}) => (primary ? "#023373" : "#03588C")};
    color: #fff;
    border: 2px solid #bbb;
    padding: 1rem 1.5rem;
    cursor: pointer;
    margin: 0.7rem;
    &:hover {
        transform: scale(0.95);
        opacity: 0.8;
    }
`;

export const StyledMain = styled.main`
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 1rem;
border: 2px solid black;
align-items: center;
justify-items: center;

`;

const StyledDiv = styled.div`

    & > div{
    display: flex;
    justify-content: space-evenly;
    padding-top: 1rem;
    padding-bottom: 1rem;
    overflow: hidden;
    &.buttons{
        justify-content: center;
    }
    img {
        width: 200px;
    }
}
    

`;

export default StyledDiv;