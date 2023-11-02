import styled, { keyframes } from "styled-components";
const primaryColor = "#284ea7";
const fadeAnimation = keyframes`
  
  0%{
opacity: 0;
  }
  50%{
opacity: 1;

  }
  100%{
opacity: 0;
  }
`;
const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  /* background: red; */
  padding: 1rem;
  position: relative;
  h1 {
    /* color: #284ea7; */
    color: ${primaryColor};
  }
  ol {
    margin-top: 1rem;
    color: gray;
    li {
      margin-bottom: 1rem;
      list-style-type: disc;
      margin-left: 1.5rem;
    }
  }
  footer {
    position: absolute;
    width: 100%;
    /* color: #284ea7; */
    color: ${primaryColor};
    animation: ${fadeAnimation} 2s linear infinite;
  }
`;
export { PageWrapper };
