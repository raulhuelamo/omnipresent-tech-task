import { fireEvent, render, screen } from '@testing-library/react';

import { Form } from './Form';

describe('Form', () => {
  describe('for every country', () => {
    it('should render a "Country of work" field, and its options', () => {
      render(<Form />);

      expect(screen.getByRole('combobox')).toBeTruthy();
      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: /country/i })
          .selected
      ).toBeTruthy();
      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Spain' })
          .selected
      ).toBeFalsy();
      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Ghana' })
          .selected
      ).toBeFalsy();
      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Brazil' })
          .selected
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

  describe('for Brazil', () => {
    it('should render "Working hours" field', () => {
      render(<Form />);

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'Brazil' },
      });

      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Brazil' })
          .selected
      ).toBeTruthy();

      expect(screen.getByLabelText(/working hours/i)).toBeTruthy();
      expect(screen.queryByLabelText(/number of children/i)).toBeFalsy();
      expect(screen.queryByLabelText(/marital status/i)).toBeFalsy();
      expect(screen.queryByLabelText(/social insurance number/i)).toBeFalsy();
    });
  });

  describe('for Spain', () => {
    it('should not render "Working hours" field', () => {
      render(<Form />);

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'Spain' },
      });

      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Spain' })
          .selected
      ).toBeTruthy();

      expect(screen.queryByLabelText(/working hours/i)).toBeFalsy();
      expect(screen.queryByLabelText(/number of children/i)).toBeFalsy();
      expect(screen.queryByLabelText(/marital status/i)).toBeTruthy();
      expect(screen.queryByLabelText(/social insurance number/i)).toBeTruthy();
    });
  });

  describe('for Ghana', () => {
    it('should not render "Working hours" field', () => {
      render(<Form />);

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'Ghana' },
      });

      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Ghana' })
          .selected
      ).toBeTruthy();

      expect(screen.queryByLabelText(/working hours/i)).toBeFalsy();
      expect(screen.queryByLabelText(/number of children/i)).toBeTruthy();
      expect(screen.queryByLabelText(/marital status/i)).toBeTruthy();
      expect(screen.queryByLabelText(/social insurance number/i)).toBeFalsy();
    });
  });
});
