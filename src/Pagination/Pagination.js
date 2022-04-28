import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

const buildPagesArray = (page, pageCount, maxVisible) => {
  const pages = [];
  let surroundingPages = Math.floor(maxVisible / 2);
  let firstPaginatedPage = Math.max(page - surroundingPages, 1);
  // Checks if previous or next set of pages can be added. If they can't, they are added to other side
  if (page - surroundingPages <= 0) surroundingPages = surroundingPages + Math.abs(page - surroundingPages) + 1;
  if (pageCount - page < surroundingPages) firstPaginatedPage = firstPaginatedPage - (surroundingPages + page - pageCount);

  // Adds pages before and after current page
  for (let i = firstPaginatedPage; i < page + 1; i++) {
    pages.push(i);
  }
  for (let i = page + 1; i <= Math.min(page + surroundingPages, pageCount); i++) {
    pages.push(i);
  }

  return pages;
};

export const Pagination = forwardRef(({ currentPage = 5, maxVisible = 5, onChange, pageCount, routePrefix, ...props }, ref) => {
  const [page, setPage] = useState(currentPage);
  const BasePageChangeComponent = routePrefix ? 'a' : 'button';

  const handleOnClick = (e) => {
    setPage(e);
    onChange(e);
  };
  return (
    <nav className={styles.styledPagination} ref={ref} {...props}>
      <ul>
        {page > 1 && (
          <>
            <li>
              <BasePageChangeComponent onClick={() => handleOnClick(1)}>First</BasePageChangeComponent>
            </li>
            <li>
              <BasePageChangeComponent onClick={() => handleOnClick(page - 1)}>{'<-- Previous'}</BasePageChangeComponent>
            </li>
          </>
        )}
        {buildPagesArray(page, pageCount, maxVisible).map((pageNumber) => (
          <li key={`page-${pageNumber}`}>
            <BasePageChangeComponent
              className={page === pageNumber && styles.selectedPage}
              href={pageCount !== 0 && routePrefix ? `${routePrefix}-${pageNumber}` : routePrefix}
              onClick={() => handleOnClick(pageNumber)}>
              {pageNumber}
            </BasePageChangeComponent>
          </li>
        ))}
        {page < pageCount && (
          <>
            <li>
              <BasePageChangeComponent onClick={() => handleOnClick(page + 1)}>{'Next -->'}</BasePageChangeComponent>
            </li>
            <li>
              <BasePageChangeComponent onClick={() => handleOnClick(pageCount)}>Last</BasePageChangeComponent>
            </li>
          </>
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
