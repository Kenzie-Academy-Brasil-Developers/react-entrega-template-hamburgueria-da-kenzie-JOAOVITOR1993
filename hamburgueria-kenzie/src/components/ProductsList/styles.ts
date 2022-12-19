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


export const StyledProduct = styled.li`
  width: 15.75rem;
  height: 21.62rem;
  border: solid 2px var(--color-grey-20);
  border-radius: var(--radius);

  figure {
    background-color: var(--color-grey-1);
    border-radius: var(--radius) var(--radius) 0 0;
    display: flex;
    justify-content: center;
  }

  figure img {
    width: 10.12rem;
    height: 10.12rem;
    object-fit: cover;
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.87rem;
    padding: 1.25rem;
  }

  div h2 {
    font-size: var(--font-size-2);
    font-weight: 700;
    color: var(--color-grey-100);
  }

  div p:nth-child(1) {
    font-size: var(--font-size-4);
    font-weight: 400;
    color: var(--color-grey-50);
  }

  div p:nth-child(2) {
    font-size: var(--font-size-3);
    font-weight: 600;
    color: var(--color-primary);
  }

  div button {
    border-radius: 8px;
    width: 6.68rem;
    height: 2.5rem;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    transition: 0.6s;

    :hover {
      background-color: var(--color-primary-50);
      transition: 0.6s;
    }
  }

  @media (max-width: 768px) {
    min-width: 15.75rem;
  }
`;

