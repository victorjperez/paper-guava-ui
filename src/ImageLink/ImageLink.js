import React from 'react';
import PropTypes from 'prop-types';

import styles from "./ImageLink.module.css"; 

export const ImageLink = ({
  brightness = "30%",
  children,
  imgSrc,
  position = "center",
  ...props
}) => {
  return (
    <a className={styles.styledImageLink} {...props}>
      <img
        className={styles.backgroundImg}
        src={imgSrc}
        style={{
          "--brightness": brightness,
        }}
      />
      <span className={styles.overlayItem}>{children}</span>
    </a>
  );
};

ImageLink.propTypes = {
  /** Image src used as the base */
  imgSrc: PropTypes.string,
  /** Sets the brightness filter of the image */
  brightness: PropTypes.string,
  /** Positioning of the child component */
  position: PropTypes.oneOf(["center"]),
  // Will support these eventually when needed, no need to overcomplicate:
  // position: PropTypes.oneOf(["center", "top-left", "top-right", "bottom-right", "bottom-left"]),
};


