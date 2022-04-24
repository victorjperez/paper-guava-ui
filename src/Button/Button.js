import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from "./Button.module.scss"; 

export const Button = forwardRef(({ 
  accentColor = 'gray',
  label,
  onClick = () => {},
  styleType = "default",
  ...props }, ref) => {
  return (
    <button
      className={classNames(styles.styledButton, styles[styleType])}
      style={{
        "--accent-color": accentColor,
      }}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {label}
    </button>
  );
});

Button.propTypes = {
  /** Color used as accent */
  accentColor: PropTypes.string,
  /** Button label */
  label: PropTypes.string.isRequired,
  /** onClick callback */
  onClick: PropTypes.func,
  /** Which pre-determined style to use */
  styleType: PropTypes.oneOf(["default", "tile"]),
};


