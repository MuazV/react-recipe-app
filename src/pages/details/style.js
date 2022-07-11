import styled from "styled-components";
import {device} from '../media'

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
  @media ${device.tablet} {
    grid-template-columns: auto;
    gap: 0.5rem;
    img {
        width: 200px;
        
    }
  }
  @media ${device.mobileL} {
    grid-template-columns: auto;
    gap: 0.2rem;
  }
  img {
        width: 200px;
    }


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
    @media (max-width:768px) {
    text-align: center;
    word-wrap: break-word;
    font-size: 0.8rem;
    img {
        width: 150px;
        padding-right:1rem ;
    }
    
}
}

`;

export default StyledDiv;