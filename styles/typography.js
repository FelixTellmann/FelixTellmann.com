import css from 'styled-jsx/css';

export const typography = css.global`
    @import 'styles/mixins';

    *,*::before,*::after {
      box-sizing: border-box;
    }

    html {
      min-width: 320px;
      font-size: 10px;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
    }

    body {
      background: var(--color-background);
      color: var(--color-body);
      font-family: Inter, -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, sans-serif;
      font-size: 1.6rem;
    }

    ::selection {
      background-color: var(--color-selection);
    }

    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }

    hr {
      margin: 0;
      border-width: 0;
      border-color: unset;
    }

    strong {
      font-weight: 700;
    }

    em {
      font-style: italic;
    }

    u {
      text-decoration-color: var(--color-subdued);
      text-decoration-skip-ink: auto;
      text-decoration-width: 1px;
    }

    small {
      font-size: 0.875em;
    }
    
    
    h1, .h1 {
      margin-bottom: 1rem;
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 1.2;
      @include min-width(600px) {
        font-size: 3.6rem;
      }
    }

    h2, .h2 {
      margin-bottom: 1.6rem;
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 1.25;
      @include min-width(600px) {
        font-size: 3rem;
      }
    }

    h3, .h3 {
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 1.4;
      @include min-width(600px) {
        font-size: 2rem;
      }
    }

    h4, .h4 {
      margin-bottom: 0;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.25;
    }
    
    h5, .h5 {
      margin-bottom: 0;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.8;
    }
`;
