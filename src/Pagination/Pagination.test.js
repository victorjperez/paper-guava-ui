import React from 'react';
import { render, screen } from '@testing-library/react';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('smoke ', () => {
    render(<Pagination data-testid="test-Pagination" />);
    expect(screen.getByTestId('test-Pagination')).toBeInTheDocument();
  });
});
