import React from 'react';
import { render, screen } from '@testing-library/react';

import { TypeTitle } from './TypeTitle';

describe('TypeTitle', () => {
  test('smoke ', () => {
    render(<TypeTitle data-testid="test-TypeTitle" />);
    expect(screen.getByTestId('test-TypeTitle')).toBeInTheDocument();
  });
});
