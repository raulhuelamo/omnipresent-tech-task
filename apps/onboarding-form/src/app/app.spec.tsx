import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    render(<App />);
  });

  it('should render the onboarding form', () => {
    render(<App />);

    const form = screen.queryByRole('form');

    expect(form).toBeTruthy();
  });
});

describe('Form', () => {
  it('should render a "Country of work" field, with the right options', () => {
    render(<App />);

    expect(screen.getByRole('combobox')).toBeTruthy();
    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Spain' }).selected
    ).toBeTruthy();
    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Ghana' }).selected
    ).toBeFalsy();
    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Brazil' }).selected
    ).toBeFalsy();
  });
});
