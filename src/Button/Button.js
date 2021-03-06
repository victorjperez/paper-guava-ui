import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Button.module.scss';

export const Button = forwardRef(({ accentColor = 'gray', className, href, label, onClick = () => {}, styleType = 'default', ...props }, ref) => {
  const BaseComponent = href ? 'a' : 'button';

  return (
    <BaseComponent
      className={classNames(styles.styledButton, styles[styleType], className)}
      style={{
        '--accent-color': accentColor,
      }}
      type={BaseComponent === 'button' ? 'button' : ''}
      onClick={onClick}
      ref={ref}
      {...props}>
      {label}
    </BaseComponent>
  );
});

Button.propTypes = {
  /** Color used as accent */
  accentColor: PropTypes.string,
  /** Additional className to supply to component */
  className: PropTypes.string,
  /** Button link, renders button as anchor */
  href: PropTypes.string,
  /** Button label */
  label: PropTypes.string.isRequired,
  /** onClick callback */
  onClick: PropTypes.func,
  /** Which pre-determined style to use */
  styleType: PropTypes.oneOf(['default', 'tile']),
};
