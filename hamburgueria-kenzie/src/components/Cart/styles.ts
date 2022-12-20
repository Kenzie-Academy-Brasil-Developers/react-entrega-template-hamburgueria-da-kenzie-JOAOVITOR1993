import styled from "styled-components";

export const StyledCart = styled.div`
  width: 20rem;
  border-radius: var(--radius);

  .divHeader {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem;
    background-color: var(--color-primary);
    border-radius: var(--radius) var(--radius) 0 0;
  }

  .divHeader h2 {
    font-size: var(--font-size-2);
    color: var(--color-grey-0);
  }

  .divHeader button {
    font-size: var(--font-size-3);
    background-color: transparent;
    color: var(--color-grey-0);
    border-bottom: solid 1px transparent;
    transition: 0.6s;
  }

  .divHeader button:hover {
    transform: scale(1.3);
    transition: 0.6s;
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

  > div {
    display: flex;
    justify-content: space-between;
    gap: 0.62rem;
  }

  div div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  div div h3 {
    font-size: var(--font-size-3);
    font-weight: 700;
  }

  .counterProduct{
    width: 6rem;
    padding: 2px;
    display: flex;
    flex-direction: row;
    background-color: var(--color-grey-20);
  }

  .counterProduct button{
    cursor: pointer;
    border: solid transparent;
    font-size: var(--font-size-1);
    color: var(--color-secondary);
    background-color: var(--color-grey-20);
    width: 92px;
    height: auto;
  }

  .counterProduct p {
    background-color: var(--color-grey-0);
    padding: 6px 15px;
  }

  > button {
    font-size: var(--font-size-4);
    background-color: transparent;
    color: var(--color-grey-50);
    border-bottom: solid 1px transparent;
    transition: 0.6s;
  }

  > button:hover {
    color: var(--color-grey-100);
    border-bottom: solid 1px var(--color-grey-100);
    transition: 0.6s;
  }
`;
