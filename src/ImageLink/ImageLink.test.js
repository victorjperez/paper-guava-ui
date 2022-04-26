import React from 'react';

import { render, screen } from '@testing-library/react';

import { ImageLink } from './ImageLink';

describe('ImageLink', () => {
  test('smoke ', () => {
    render(<ImageLink label="test label" data-testid="test-button" />);
    expect(screen.getByTestId('test-button')).toBeInTheDocument();
  });
});
