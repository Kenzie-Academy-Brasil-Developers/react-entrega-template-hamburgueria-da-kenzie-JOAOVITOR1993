import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.25rem;
  width: 50rem;
  height: 45.93rem;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    width: 100%;
    height: auto;
    overflow-x: auto;
    margin-bottom: 2rem;
  }
`;
