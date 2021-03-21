import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakpoints) {
  const arrayComBreakpoints = Object.keys(cssByBreakpoints);

  return arrayComBreakpoints.map((breakpoint) => css`
      @media (min-width: ${breakpoints[breakpoint]}px){
        ${cssByBreakpoints[breakpoint]}
      }
  `);
}
