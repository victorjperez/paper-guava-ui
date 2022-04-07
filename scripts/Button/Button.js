import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from "./Button.module.css"; 

export const Button = forwardRef (({...props}, ref) => {
  return (
    <button className={styles.styledButton} ref={ref} {...props} />
  );
});

Button.propTypes = {
  /** Prop info here */
  // prop: PropTypes.any,
};


