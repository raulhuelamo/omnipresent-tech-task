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

  it('should render "First name" field', () => {
    render(<App />);

    expect(screen.getByLabelText(/first name/i)).toBeTruthy();
  });

  it('should render "Last name" field', () => {
    render(<App />);

    expect(screen.getByLabelText(/last name/i)).toBeTruthy();
  });

  it('should render "Date of birth" field', () => {
    render(<App />);

    expect(screen.getByLabelText(/date of birth/i)).toBeTruthy();
  });

  it('should render "Holiday allowance" field', () => {
    render(<App />);

    expect(screen.getByLabelText(/holiday allowance/i)).toBeTruthy();
  });
});
