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
      position: relative;
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
    
    p, .p {
      margin-bottom: 0;
      color: var(--color-text);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.7;
      letter-spacing: unset;
    }

    article {
      z-index: 1;

      p, .p {
        margin-top: 1.6rem;
        margin-bottom: 3.2rem;
      }

      p:first-of-type, .p:first-of-type {
        margin-top: 0;
      }
    }
    
    h1, .h1 {
      margin-bottom: 1rem;
      color: var(--color-body);
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: unset;
    }

    h2, .h2 {
      margin-bottom: 1.6rem;
      color: var(--color-body);
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: unset;
      @include min-width(600px) {
        font-size: 3.6rem;
      }
    }

    h3, .h3 {
      margin-bottom: 1rem;
      color: var(--color-body);
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.4;
      letter-spacing: unset;
      @include min-width(600px) {
        font-size: 2.4rem;
      }
    }

    h4, .h4 {
      margin-bottom: 0.8rem;
      color: var(--color-body);
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: unset;
    }
    
    h5, .h5 {
      margin-bottom: 0.8rem;
      color: var(--color-body);
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: -0.05em;
    }

    h6, .h6 {
      margin-bottom: 0;
      color: var(--color-body);
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.8;
      letter-spacing: unset;
    }
`;
