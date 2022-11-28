import styled from "styled-components";

export const StyleDivApp = styled.div`
    display: flex;
    justify-content:space-between;

    @media (max-width: 768px){
      flex-direction: column;
  }
`