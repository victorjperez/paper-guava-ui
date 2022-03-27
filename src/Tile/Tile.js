import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from "./Tile.module.css"; 

export const Tile = ({
  accentColor = 'red',
  label,
  link,
  onClick = () => {},
  styleType = "default",
  tileIcon,
  ...props
}) => {
  if (link) {
    return (
      <a
        className={classNames(styles.styledTile, styles[styleType])}
        style={{
          "--accent-color": accentColor,
        }}
        href={link}
        {...props}
      >
        {/* {tileIcon && tileIcon}
        {label && label} */}
      </a>
    );
  }
  return (
    <button
    type="button"
      className={classNames(styles.styledTile, styles[styleType])}
      style={{
        "--accent-color": accentColor,
      }}
      onClick={onClick}
      {...props}
    >
      {/* {tileIcon && tileIcon}
      {label && label} */}
    </button>
  );
};

Tile.propTypes = {
  /** Which accent color to use */
  accentColor: PropTypes.string,
  /** Tile label */
  label: PropTypes.string,
  /** URL */
  link: PropTypes.string,
  /** on click callback */
  onClick: PropTypes.func,
  /** Which tyling set to use */
  styleType: PropTypes.oneOf(["default", "accented"]),
  /** Icon passed to Tile above label */
  tileIcon: PropTypes.node,
};


