import styled from "styled-components";

export const StyledInput = styled.fieldset`
   border: transparent;
   position: relative;
   display: flex;
   flex-direction: column;

   label{
      font-size: var(--font-size-4);
      color: var(--color-grey-50);
      padding: 5px;
      background-color: var(--color-grey-0);
      position: absolute;
      top: -11px;
      left: 13px;
   }

   input{
      width: 100%;
      border: solid 2px var(--color-grey-100);
      padding: 1.25rem 0.93rem;
      border-radius: var(--radius);
      font-size: var(--font-size-2);
      color: var(--color-grey-100);
   }
`