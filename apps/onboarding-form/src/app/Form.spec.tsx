import { render, screen } from '@testing-library/react';

import { Form } from './Form';

describe('Form', () => {
  it('should render a "Country of work" field, with the right options', () => {
    render(<Form />);

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
    render(<Form />);

    expect(screen.getByLabelText(/first name/i)).toBeTruthy();
  });

  it('should render "Last name" field', () => {
    render(<Form />);

    expect(screen.getByLabelText(/last name/i)).toBeTruthy();
  });

  it('should render "Date of birth" field', () => {
    render(<Form />);

    expect(screen.getByLabelText(/date of birth/i)).toBeTruthy();
  });

  it('should render "Holiday allowance" field', () => {
    render(<Form />);

    expect(screen.getByLabelText(/holiday allowance/i)).toBeTruthy();
  });
});
