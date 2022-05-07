import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './TypeTitle.module.scss';

import { Typography } from '../Typography';

export const TypeTitle = forwardRef(({ as, children, className, ...props }, ref) => {
  const selectedAs = as || 'h1';
  return (
    <Typography as={selectedAs} className={classNames(styles.styledTypeTitle, className)} ref={ref} {...props}>
      {children}
    </Typography>
  );
});

TypeTitle.propTypes = {
  /** Base HTML element used for component */
  as: PropTypes.string,
  /** Additional className to supply to component */
  className: PropTypes.string,
  /** Child element(s) */
  children: PropTypes.any,
};
