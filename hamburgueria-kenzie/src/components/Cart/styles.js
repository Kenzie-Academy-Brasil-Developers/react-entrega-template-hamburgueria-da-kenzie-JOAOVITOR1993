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
