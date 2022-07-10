import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({primary}) => (primary ? "green" : "red")};
    border: none;
    padding: 1rem 1.5rem;
    &:hover {
        transform: scale(0.95);
        opacity: 0.8;
    }

`;