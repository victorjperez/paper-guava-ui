import React from 'react';
import { render, screen } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
  test('smoke ', () => {
    render(<Typography data-testid="test-Typography" />);
    expect(screen.getByTestId('test-Typography')).toBeInTheDocument();
  });
});
