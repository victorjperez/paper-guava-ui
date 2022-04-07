import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  test('smoke ', () => {
    render(<Button label="test label" data-testid="test-button" />)
      expect(screen.getByTestId("test-button")).toBeInTheDocument();
  });
 
});