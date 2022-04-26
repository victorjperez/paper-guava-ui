import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

export const Pagination = forwardRef(({ currentPage = 1, maxVisible = 5, onChange, pageCount, routePrefix, ...props }, ref) => {
  const pages = [1];
  for (let i = currentPage === 1 ? 2 : currentPage; i < currentPage + maxVisible - 1; i++) {
    pages.push(i);
  }
  const handleOnClick = (e, button) => {
    onChange(e, button);
  };
  return (
    <nav className={styles.styledPagination} ref={ref} {...props}>
      <ul>
        {currentPage > 1 && (
          <li>
            <a href={`${routePrefix}-${pageCount}`} onClick={handleOnClick('previous')}>
              {'<-- Previous'}
            </a>
          </li>
        )}
        {pages.map((page) => (
          <li key={`page-${page}`}>
            <a href={pageCount !== 0 ? `${routePrefix}-${page}` : routePrefix} onClick={handleOnClick('next')}>
              {page}
            </a>
          </li>
        ))}
        <li>...</li>
        <li key={`page-${pageCount}`}>
          <a href={`${routePrefix}-${pageCount}`}>{pageCount}</a>
        </li>
        {currentPage < pageCount && (
          <li>
            <a href={pageCount !== 0 ? `${routePrefix}-${pageCount}` : routePrefix} onClick={handleOnClick('next')}>
              {'Next -->'}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
});

Pagination.propTypes = {
  /** Page that is selected as active  */
  currentPage: PropTypes.number,
  /** Callback: called when page button clicked, including next and previous */
  onChange: PropTypes.node,
  /** Max number of pages to render links for. First and last is always included in this count */
  maxVisible: PropTypes.number,
  /** Number of pages to paginate */
  pageCount: PropTypes.number,
  /** Href to use on pagination items, with number added. Number not appended if pageCount 1. */
  routePrefix: PropTypes.string,
};
