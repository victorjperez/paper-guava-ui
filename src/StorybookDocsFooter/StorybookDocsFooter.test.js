import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

import { StorybookDocsFooter } from "./StorybookDocsFooter";

describe("StorybookDocsFooter", () => {
  test("smoke ", () => {
    render(
      <StorybookDocsFooter
        label="test label"
        data-testid="test-storybook-docs-footer"
      />
    );
    expect(screen.getByTestId("test-storybook-docs-footer")).toBeInTheDocument();
  });
});