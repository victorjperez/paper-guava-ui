import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles'; 
/**
 * Primary UI component for user interaction
 */
export const Button = ({  styleType = 'rectangle', size = 'medium', label, ...props }) => {
  return (
    <StyledButton
      type="button"
      styleType={styleType}
      size={size}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /**  What styling to use */
  styleType: PropTypes.oneOf(['rectangle', 'tile', 'inline']),
  /**  What accent color to use */
  color: PropTypes.string,
  /** What shape the button is */
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** on click callback */
  onClick: PropTypes.func,
};


