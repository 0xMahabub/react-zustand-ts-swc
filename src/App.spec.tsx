import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App Testing', () => {
  test('App rendering', () => {
    render(<App />);

    expect(screen.debug());
  });
});
