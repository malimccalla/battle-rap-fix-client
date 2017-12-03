import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { colors } from './variables.json';

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
    color: ${colors.global.text};
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    background-color: ${colors.global.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.mediumGrey};
    font-weight: 600;
    line-height: .8;
  }

  p {
    margin-top: 0;
  }
`;
