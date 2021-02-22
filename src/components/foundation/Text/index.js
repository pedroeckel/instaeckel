import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

const smallestException = css`
  ${
    ({theme}) => {
      return css`
        font-size: ${theme.typographyVariants.smallestException.fontSize};
        font-weight: ${theme.typographyVariants.smallestException.fontWeight};
        line-height: ${theme.typographyVariants.smallestException.lineHeight};
      `
    } 
  }
`

const paragraph1 = css`
  ${
    ({theme}) => {
      return css`
        font-size: ${theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${theme.typographyVariants.paragraph1.lineHeight};
      `
    } 
  }
`

export const TextStyleVariants = {
  smallestException,
  paragraph1
}

const TextBase = styled.span`
  ${
    ({variant}) => TextStyleVariants[variant]
  }
`;

export function Text({children, variant, tag}){
  return(
    <TextBase
      variant={variant}
      as={tag}
    >
      {children}
    </TextBase>
  )  
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
}; 