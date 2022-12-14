import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should render successfully', () => {
    render(<App />);
  });

  it('should render the onboarding form', () => {
    render(<App />);

    const form = screen.queryByRole('form', { name: /employee onboarding/i });

    expect(form).toBeTruthy();
  });
});
