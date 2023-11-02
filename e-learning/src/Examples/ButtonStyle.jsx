import styled, { keyframes } from "styled-components";
// import { keyframes } from "styled-components";

const rotate = keyframes`
    from{
transform: rotate(0);
    }
    to{
transform: rotate(360deg);

    }
`;

export const ButtonStyle = styled.button`
  background: ${(props) => (props.primary ? "red" : "black")};
  color: ${(props) => (props.primary ? "white" : "yellow")};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0.5rem;
  &:hover {
    background: ${(props) => (props.primary ? "green" : "orange")};
  }
  &:active {
    background: ${(props) => (props.primary ? "pink" : "lightblue")};
    /* keyframes */
    animation: ${rotate} 2s linear infinite;
  }
`;
