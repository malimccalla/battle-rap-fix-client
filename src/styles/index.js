import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  }
`;
