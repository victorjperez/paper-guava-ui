import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './TypeBody.module.scss';

import { Typography } from '../Typography';

export const TypeBody = forwardRef(({ as, children, className, ...props }, ref) => {
  const selectedAs = as || 'p';
  return (
    <Typography as={selectedAs} className={classNames(styles.styledTypeBody, className)} ref={ref} {...props}>
      {children}
    </Typography>
  );
});

TypeBody.propTypes = {
  /** Base HTML element used for component */
  as: PropTypes.string,
  /** Additional className to supply to component */
  className: PropTypes.string,
  /** Child element(s) */
  children: PropTypes.any,
};
