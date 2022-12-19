import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0.62rem 0;
  background-color: var(--color-grey-1);
  margin-bottom: 1.93rem;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.43rem;
  }

  div:nth-child(2) > button {
    width: 1.56rem;
    height: 1.56rem;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    transition: 0.6s;
  }

  div:nth-child(2) > button:hover {
    transform: scale(1.3);
    transition: 0.6s;
  }

  div:nth-child(2) > button figure img {
    width: 100%;
    height: 100%;
  }

  figure img {
    width: 9.87rem;
    height: 2.25rem;
  }

  .divForm {
    padding: 0.62rem;
    background-color: var(--color-grey-0);
    border: solid 2px var(--color-grey-20);
    border-radius: 8px;
    width: 20rem;
  }

  form {
    display: flex;
    justify-content: space-between;
  }

  form button {
    border-radius: var(--radius);
    width: 6.68rem;
    height: 2.5rem;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    transition: 0.6s;
  }

  form button:hover {
    background-color: var(--color-primary-50);
    transition: 0.6s;
  }

  @media (max-width: 768px) {
    div:nth-child(1) {
      flex-direction: column;
    }

    form {
      width: 100%;
    }

    .divForm {
      width: 100%;
    }
  }
`;

export const StyledInputSearch = styled.input`
  border: transparent;
  height: 2.5rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
