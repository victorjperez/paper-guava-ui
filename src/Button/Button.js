import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from "./Button.module.css"; 
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  accentColor = 'red',
  label,
  onClick = () => {},
  size = "md",
  styleType = "default",
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.styledButton, styles[size], styles[styleType])}
      style={{
        "--accent-color": accentColor,
      }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**  What accent color to use */
  accentColor: PropTypes.string,
  /** Button label */
  label: PropTypes.string.isRequired,
  /** on click callback */
  onClick: PropTypes.func,
  /** What suze the button is */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**  What styling to use */
  styleType: PropTypes.oneOf(["default", "inverted"]),
};


