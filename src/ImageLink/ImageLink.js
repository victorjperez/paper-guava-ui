import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from "./ImageLink.module.scss"; 

export const ImageLink = forwardRef(({ 
  brightness = "30%",
  children,
  imgSrc,
  ...props }, ref) => {
  return (
    <a className={styles.styledImageLink} ref={ref} {...props}>
      <img
        className={styles.backgroundImg}
        src={imgSrc}
        style={{
          "--brightness": brightness,
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
  /** Image src used as the base */
  imgSrc: PropTypes.string,
  // Will support these eventually when needed, no need to overcomplicate:
  // position: PropTypes.oneOf(["center", "top-left", "top-right", "bottom-right", "bottom-left"]),
};


