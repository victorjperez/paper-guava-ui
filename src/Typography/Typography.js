import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Typography.module.scss';

export const Typography = forwardRef(({ as, bold = false, className, children, reversed = false, ...props }, ref) => {
  const BaseComponent = as || 'p';
  return (
    <BaseComponent className={classNames(styles.styledTypography, className, bold && styles.bold, reversed && styles.reversed)} ref={ref} {...props}>
      {children}
    </BaseComponent>
  );
});

Typography.propTypes = {
  /** Base HTML element used for component */
  as: PropTypes.string,
  /** Bolds passed text */
  bold: PropTypes.bool,
  /** Additional className to supply to component */
  className: PropTypes.string,
  /** Child element(s) */
  children: PropTypes.any,
  /** Reverse texts for darker backgrounds */
  reversed: PropTypes.bool,
};
