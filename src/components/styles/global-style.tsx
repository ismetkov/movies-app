import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Wrapper = createGlobalStyle`
:root {
  --red: #FF4949;
  --black: #2E2E2E;
  --yellow: #ffc600;
  --white: #fff;
  --grey: #efefef;
  --shad: 0 0 10px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05);

}
*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-size: 10px;
}

body {
  font: 400 0.875rem "Roboto", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--grey);


  &:before {
    content: '';
    display: block;
    height: 10px;
    width: 100%;
  }
}

h1, h2, h3, h4, h5, h6, {
  font-size: 5rem;
  font-weight: 600;
  letter-spacing: -1px;
}

a {
  text-decoration: none;
  color: var(--black);
}

p a {
  border-bottom: 2px solid var(--yellow);
}

p {
  line-height: 2;
  font-size: 1.6rem;
}
`;

export const InnerWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media all and (max-width: 900px) {
    padding: 2rem;
  }
`;

function GlobalStyle() {
  return <Wrapper />;
}

export default GlobalStyle;
