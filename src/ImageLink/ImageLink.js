import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './ImageLink.module.scss';

export const ImageLink = forwardRef(({ brightness = '30%', children, className, imgSrc, ...props }, ref) => {
  return (
    <a className={classNames(styles.styledImageLink, className)} ref={ref} {...props}>
      <img
        className={styles.backgroundImg}
        src={imgSrc}
        style={{
          '--brightness': brightness,
        }}
        alt=""
        role="presentation"
      />
      <span className={styles.overlayItem}>{children}</span>
    </a>
  );
});

ImageLink.propTypes = {
  /** Sets the brightness filter of the image */
  brightness: PropTypes.string,
  /** Additional className to supply to component */
  className: PropTypes.string,
  children: PropTypes.any,
  /** Image src used as the base */
  imgSrc: PropTypes.string,
  // Will support these eventually when needed, no need to overcomplicate:
  // position: PropTypes.oneOf(["center", "top-left", "top-right", "bottom-right", "bottom-left"]),
};
