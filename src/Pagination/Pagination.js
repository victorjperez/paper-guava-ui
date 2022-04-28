import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

const buildPagesArray = (page, pageCount, maxVisible) => {
  const pages = [1];
  const maxMiddlePages = maxVisible - 3;
  const leftPages = Math.floor(maxMiddlePages / 2);
  const startingMiddlePage = page - leftPages > 1 ? page - leftPages : 2;
  const rightpages = Math.round(maxMiddlePages / 2);
  if (startingMiddlePage > 2) {
    pages.push('...');
  }
  for (let i = startingMiddlePage; i < page + 1; i++) {
    pages.push(i);
  }
  for (let i = page + 1; i <= page + rightpages; i++) {
    if (i > pageCount) break;
    pages.push(i);
  }
  if (page + rightpages < pageCount - 1) {
    pages.push('...');
    pages.push(pageCount);
  }
  return pages;
};

export const Pagination = forwardRef(({ currentPage = 5, maxVisible = 5, onChange, pageCount, routePrefix, ...props }, ref) => {
  const [page, setPage] = useState(currentPage);
  const BasePageChangeComponent = routePrefix ? 'a' : 'button';

  const handleOnClick = (e) => {
    console.log(e);
    setPage(e);
    onChange(e);
  };
  return (
    <nav className={styles.styledPagination} ref={ref} {...props}>
      <ul>
        {page > 1 && (
          <li>
            <BasePageChangeComponent href={routePrefix && `${routePrefix}-${pageCount}`} onClick={() => handleOnClick(page - 1)}>
              {'<-- Previous'}
            </BasePageChangeComponent>
          </li>
        )}
        {buildPagesArray(page, pageCount, maxVisible).map((pageNumber) => {
          if (pageNumber === '...') return <li>...</li>;
          return (
            <li key={`page-${pageNumber}`}>
              <BasePageChangeComponent
                className={page === pageNumber && styles.selectedPage}
                href={pageCount !== 0 && routePrefix ? `${routePrefix}-${pageNumber}` : routePrefix}
                onClick={() => handleOnClick(pageNumber)}>
                {pageNumber}
              </BasePageChangeComponent>
            </li>
          );
        })}
        {page < pageCount && (
          <li>
            <BasePageChangeComponent href={pageCount !== 0 && routePrefix ? `${routePrefix}-${pageCount}` : routePrefix} onClick={() => handleOnClick(page + 1)}>
              {'Next -->'}
            </BasePageChangeComponent>
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
