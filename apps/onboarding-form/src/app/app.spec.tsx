import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render the onboarding form', () => {
    const form = screen.queryByRole('form', { name: /employee onboarding/i });

    expect(form).toBeTruthy();
  });

  it('should render the app heading', () => {
    const logo = screen.queryByAltText('Logo');
    const heading = screen.queryByRole('heading', {
      name: 'Employee Onboarding',
    });

    expect(logo).toBeTruthy();
    expect(heading).toBeTruthy();
  });
});
