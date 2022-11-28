import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0.62rem 0;
  background-color: var(--color-grey-1);
  margin-bottom: 1.93rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    div {
      flex-direction: column;
    }

    form{
      width: 100%;
    }

    .divForm {
      width: 100%;
    }
  }
`;
