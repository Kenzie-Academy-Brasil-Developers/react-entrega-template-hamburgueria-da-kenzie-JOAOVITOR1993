import styled from "styled-components";

export const StyledCart = styled.div`
  padding: 1.25rem 0.62rem;
  background-color: var(--color-grey-1);
  border-radius: 0 0 var(--radius) var(--radius);

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.37rem;
  }

  div p:nth-child(1) {
    font-size: var(--font-size-3);
    font-weight: 600;
  }

  div p:nth-child(2) {
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--color-grey-50);
  }

  button {
    font-size: 1rem;
    width: 100%;
    height: 3.75rem;
    border-radius: 8px;
    background-color: var(--color-grey-20);
    color: var(--color-grey-50);
    transition: 0.6s;

    :hover {
      color: var(--color-grey-20);
      background-color: var(--color-grey-50);
      transition: 0.6s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
