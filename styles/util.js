import css from 'styled-jsx/css';

const sizes = [2, 4, 8, 16, 24, 32, 36, 64, 128, 256];
export const util = css.global`${sizes.map((item) => `.m${item} {
    margin: ${item / 10}rem;
  }
  .mt${item} {
    margin-top: ${item / 10}rem;
  }
  .mr${item} {
    margin-right: ${item / 10}rem;
  }
  .mb${item} {
    margin-bottom: ${item / 10}rem;
  }
  .ml${item} {
    margin-left: ${item / 10}rem;
  }
  .p${item} {
    padding: ${item / 10}rem;
  }
  .pt${item} {
    padding-top: ${item / 10}rem;
  }
  .pr${item} {
    padding-right: ${item / 10}rem;
  }
  .pb${item} {
    padding-bottom: ${item / 10}rem;
  }
  .pl${item} {
    padding-left: ${item / 10}rem;
  }`).join('')}`