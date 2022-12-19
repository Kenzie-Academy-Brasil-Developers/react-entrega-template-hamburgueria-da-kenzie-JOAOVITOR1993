import styled from "styled-components";

export const StyledCart = styled.div`
  width: 20rem;
  border-radius: var(--radius);

  h2 {
    font-size: var(--font-size-2);
    font-weight: 700;
    padding: 1.25rem;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border-radius: var(--radius) var(--radius) 0 0;
  }

  ul {
    max-height: 22rem;
    overflow-x: auto;
    padding: 1.25rem 0.62rem;
    background-color: var(--color-grey-1);
    display: flex;
    flex-direction: column;
    gap: 1.43rem;
    border-bottom: solid 2px var(--color-grey-20);
  }

  ul figure img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


export const StyledCartProduct = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-1);

  figure img {
    width: 4.37rem;
    height: 4.37rem;
    object-fit: cover;
    border-radius: var(--radius);
    padding: 0.31rem;
    background-color: var(--color-grey-20);
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.62rem;
  }

  div div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  div div h3 {
    font-size: var(--font-size-3);
    font-weight: 700;
  }

  div div p {
    font-size: var(--font-size-4);
    font-weight: 400;
    color: var(--color-grey-50);
  }

  button {
    font-size: var(--font-size-4);
    background-color: transparent;
    color: var(--color-grey-50);
    border-bottom: solid 1px transparent;
    transition: 0.6s;

    :hover {
      color: var(--color-grey-100);
      border-bottom: solid 1px var(--color-grey-100);
      transition: 0.6s;
    }
  }
`;
