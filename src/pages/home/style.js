import styled from "styled-components";
import { device } from "../media";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #0388a6;
`;

export const StyledInput = styled.input`
  margin: 0.5rem;
`;

export const StyledSelect = styled.select`
  padding: 0.1rem;
`;
// color: #023373;
// color: #03588C;
// color: #04ADBF;
// color: #04D9C4;
// color: #0388A6;

export const StyDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  @media ${device.mobileL} {
    grid-template-columns: auto;
    gap: 0.5rem;
  }
`;

export const DivBot = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  text-align: center;
  background-color: #0388a6;
`;

export default StyledDiv;
