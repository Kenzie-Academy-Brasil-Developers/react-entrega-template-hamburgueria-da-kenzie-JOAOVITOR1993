import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-grey-100: #333333;
  --color-grey-50: #828282;
  --color-grey-20: #E0E0E0;
  --color-grey-1: #F5F5F5;
  --color-grey-0: #FFFFFF;

  --color-primary:#27AE60;
  --color-primary-50: #93D7AF;
  --color-secondary:  #EB5757;
  
  --font-size-0: 1.62rem;
  --font-size-1: 1.37rem;
  --font-size-2: 1rem;
  --font-size-3: 0.87rem;
  --font-size-4: 0.75rem;

  --radius: 8px;
}

h1, h2, h3, h4, h5, p, a, span, button, input, label{
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-100);
}

.container{
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.pError{
  font-weight: var(--font-size-4);
  color: var(--color-secondary);
}

`