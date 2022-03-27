import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from "./Button.module.css"; 

export const Button = ({
  accentColor = 'red',
  label,
  onClick = () => {},
  styleType = "default",
  ...props
}) => {
  return (
    <button
      className={classNames(styles.styledButton, styles[styleType])}
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
  /**  What styling to use */
  styleType: PropTypes.oneOf(["default", "inverted"]),
};


