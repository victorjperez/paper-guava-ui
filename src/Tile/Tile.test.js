import React from 'react'

import {render, fireEvent, screen} from '@testing-library/react'

import { Tile } from './Tile'

describe('Tile', () => {
  test('smoke ', () => {
    render(<Tile label="test label" data-testid="test-button" />)
      expect(screen.getByTestId("test-button")).toBeInTheDocument();
  });
 
});