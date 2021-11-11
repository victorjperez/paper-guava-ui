import React from 'react';
import PropTypes from 'prop-types';

import { StyledImageLink } from "./styles"; 
/**
 * Primary UI component for user interaction
 */
export const ImageLink = ({ imgSrc, brightness = "30%", position="center", children, ...props }) => {
  return (
    <StyledImageLink brightness={brightness} position={position} {...props}>
      <span className="overlay-item">{children}</span>
      <img src={imgSrc} />
    </StyledImageLink>
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


