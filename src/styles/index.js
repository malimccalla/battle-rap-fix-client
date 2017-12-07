import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    color: #778795;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    background-color: #ebeef5;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    line-height: .8;
  }

  p {
    margin-top: 0;
  }
`;
