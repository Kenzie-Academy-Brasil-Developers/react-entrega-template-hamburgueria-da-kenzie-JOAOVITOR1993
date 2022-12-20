import styled from "styled-components";

export const BackGroundModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background-modal);
  position: fixed;
  inset: 0;

  @media (max-width: 768px) {
      padding: 0 1rem;
  }
`