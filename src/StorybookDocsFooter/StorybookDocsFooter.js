import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from "./StorybookDocsFooter.module.css"; 

export const StorybookDocsFooter = forwardRef(({ ...props }, ref) => {
  return (
    <div className={styles.styledStorybookDocsFooter} ref={ref} {...props}>
      <div className="footer-column">
        <h2>Paper Guava UI Links</h2>
        <ul>
          <li>
            <a href="https://github.com/victorjperez/paper-guava-ui">
              Github Repo
            </a>
          </li>
          <li>
            <a href="https://victorjperez.github.io/paper-guava-ui/?path=/story/documentation-introduction--page">
              Prod Storybook
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>Key Documentation</h2>
        <ul>
          <li>
            <a href="./?path=/docs/documentation-introduction--page">
              Introduction
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>Related Repos</h2>
        <ul>
          <li>
            <a href="https://github.com/victorjperez/writing">Writing</a>
          </li>
          <li>
            <a href="https://github.com/victorjperez/portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>Author Links</h2>
        <ul>
          <li>
            <a href="https://github.com/victorjperez/">Personal Github</a>
          </li>
          <li>
            <a href="https://victorjperez.github.io/">Portfolio</a>
          </li>
          <li>
            <a href="https://victorjperez.github.io/writing/">Writing</a>
          </li>
        </ul>
      </div>
    </div>
  );
});

StorybookDocsFooter.propTypes = {
  /** Prop info here */
  // prop: PropTypes.any,
};


