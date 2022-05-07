import React from 'react';
import { render, screen } from '@testing-library/react';

import { TypeBody } from './TypeBody';

describe('TypeBody', () => {
  test('smoke ', () => {
    render(<TypeBody data-testid="test-TypeBody" />);
    expect(screen.getByTestId('test-TypeBody')).toBeInTheDocument();
  });
});
