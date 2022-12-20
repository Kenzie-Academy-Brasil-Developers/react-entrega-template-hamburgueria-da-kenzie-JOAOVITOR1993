import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1.5rem 0;
  background-color: var(--color-grey-1);
  margin-bottom: 1.93rem;

  > div {
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

  .btnSearch {
    display: none;
  }

  .btnCartQtd {
    position: relative;
  }

  .btnCartQtd p {
    padding: 0.31rem 0.3rem;
    border-radius: var(--radius);
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    font-size: var(--font-size-3);
    font-weight: 900;
    position: absolute;
    right: -12px;
    top: -16px;
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
    display: block;
  }

  .divFormMobile {
    display: none;
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

  .btnSearchMobile{
    width: 3.31rem;
    height: 2.5rem;
    border: transparent;
    cursor: pointer;
  }

  .btnSearchMobile figure img{
    width: 1rem;
  }

  @media (max-width: 768px) {

    .btnSearch {
      display: block;
    }

    form {
      width: 100%;
    }

    .divForm {
      width: 100%;
      display: none;
    }

    .divBackFormMobile {
      position: absolute;
      z-index: 1;
      top: 0;
      width: 100%;
      height: 5rem;
      padding: 0 1rem;
      background-color: var(--color-grey-1);
    }

    .divFormMobile {
      padding: 0.62rem;
      background-color: var(--color-grey-0);
      border: solid 2px var(--color-grey-20);
      border-radius: 8px;
      width: 100%;
      display: block;
    }
  }

  @media (max-width: 320px) {
    > div {
      flex-direction: column;
      gap: 1rem;
    }

    .divBackFormMobile{
      height: 8rem;
      justify-content: center;
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
