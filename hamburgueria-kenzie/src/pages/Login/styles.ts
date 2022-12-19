import styled from "styled-components";

export const StyledDivLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .imgLoginMobile {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: none;
    justify-content: none;
    align-items: none;
    margin-top: 30%;
    
    .imgLogin {
      display: none;
    }

    .imgLoginMobile {
      display: block;
      width: 100%;
    }

    .imgLoginMobile img{
        width: 100%;
    }

  }
`;

export const StyledLogin = styled.form`
  width: 31.25rem;
  padding: 1.62rem 1.5rem;
  border-radius: var(--radius);
  border: solid 2px var(--color-grey-1);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h1 {
    font-size: var(--font-size-2);
  }

  button {
    border-radius: var(--radius);
    width: 100%;
    padding: 1.25rem 0.93rem;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    transition: 0.6s;
  }

  button:hover {
    background-color: var(--color-primary-50);
    transition: 0.6s;
  }

  .pLogin {
    font-size: var(--font-size-3);
    color: var(--color-grey-50);
    text-align: center;
  }

  a {
    text-align: center;
    font-size: var(--font-size-2);
    font-weight: 500;
    border: transparent;
    cursor: pointer;
    border-radius: var(--radius);
    width: 100%;
    padding: 1.25rem 0.93rem;
    background-color: var(--color-grey-1);
    color: var(--color-grey-50);
    transition: 0.6s;
  }

  a:hover {
    background-color: var(--color-grey-50);
    color: var(--color-grey-1);
    transition: 0.6s;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`;
