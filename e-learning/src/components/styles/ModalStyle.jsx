import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  h1,
  p {
    margin-bottom: 1rem;
  }
  & .modal-content > div {
    /* background: red; */
    display: flex;
    justify-content: space-between;
  }
  & buttons {
    display: flex;
    justify-content: space-between;
  }
`;
