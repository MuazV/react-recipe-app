import styled from 'styled-components';
import { device } from '../../pages/media';


const NavMainDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.2rem;
background-color: #04D9C4;
height: 10vh;
@media ${device.tablet} {
    font-size: 0.8rem;
  }

`;
export const Nava = styled.a`
text-decoration: none;
margin: 0 3rem;
@media ${device.tablet} {
    margin: 0 1rem;
  }

`;

export const Styledh3 = styled.h3`
margin-left:2rem;
@media ${device.tablet} {
    margin-left: 0.5rem;
    
  }
`;


export default NavMainDiv;