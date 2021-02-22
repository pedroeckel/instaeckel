import styled, {css} from "styled-components";
import get from "lodash/get";
import { TextStyleVariants } from "../../foundation/Text";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import { propToStyle } from "../../../theme/utils/propToStyle";

const ButtonGhost = css`
  background: transparent;
  color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
`

const ButtonDefault = css`
  color: ${({theme, variant}) => get(theme, `colors.${variant}.contrastText`)};
  background: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
  ${
    breakpointsMedia({
      xs: TextStyleVariants.smallestException,
      md: TextStyleVariants.paragraph1,
    })
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}

`