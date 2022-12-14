import { fireEvent, render, screen } from '@testing-library/react';

import { Form } from './Form';

describe('Form', () => {
  describe('by default', () => {
    beforeEach(() => {
      render(<Form />);
    });

    it('should render a "Country of work" field, and its options', () => {
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
      expect(screen.getByLabelText(/first name/i)).toBeTruthy();
    });

    it('should render "Last name" field', () => {
      expect(screen.getByLabelText(/last name/i)).toBeTruthy();
    });

    it('should render "Date of birth" field', () => {
      expect(screen.getByLabelText(/date of birth/i)).toBeTruthy();
    });

    it('should render "Holiday allowance" field', () => {
      expect(screen.getByLabelText(/holiday allowance/i)).toBeTruthy();
    });

    it('should render a Submit button', () => {
      expect(screen.getByRole('button', { name: 'Submit' })).toBeTruthy();
    });
  });

  describe('when the selected country is Brazil', () => {
    beforeEach(() => {
      render(<Form />);

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'Brazil' },
      });
    });

    it('should have Brazil selected as a country', () => {
      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Brazil' })
          .selected
      ).toBeTruthy();
    });

    it('should render its country-specific fields', () => {
      expect(screen.getByLabelText(/working hours/i)).toBeTruthy();
    });

    it('should not render any country-specific fields from different countries', () => {
      expect(screen.queryByLabelText(/number of children/i)).toBeFalsy();
      expect(screen.queryByLabelText(/marital status/i)).toBeFalsy();
      expect(screen.queryByLabelText(/social insurance number/i)).toBeFalsy();
    });
  });

  describe('when the selected country is Spain', () => {
    beforeEach(() => {
      render(<Form />);

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'Spain' },
      });
    });

    it('should have Spain selected as a country', () => {
      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Spain' })
          .selected
      ).toBeTruthy();
    });

    it('should render its country-specific fields', () => {
      expect(screen.queryByLabelText(/marital status/i)).toBeTruthy();
      expect(screen.queryByLabelText(/social insurance number/i)).toBeTruthy();
    });

    it('should not render any country-specific fields from different countries', () => {
      expect(screen.queryByLabelText(/working hours/i)).toBeFalsy();
      expect(screen.queryByLabelText(/number of children/i)).toBeFalsy();
    });
  });

  describe('when the selected country is Ghana', () => {
    beforeEach(() => {
      render(<Form />);

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'Ghana' },
      });
    });

    it('should have Ghana selected as a country', () => {
      expect(
        screen.getByRole<HTMLOptionElement>('option', { name: 'Ghana' })
          .selected
      ).toBeTruthy();
    });

    it('should render its country-specific fields', () => {
      expect(screen.queryByLabelText(/number of children/i)).toBeTruthy();
      expect(screen.queryByLabelText(/marital status/i)).toBeTruthy();
    });

    it('should not render any country-specific fields from different countries', () => {
      expect(screen.queryByLabelText(/working hours/i)).toBeFalsy();
      expect(screen.queryByLabelText(/social insurance number/i)).toBeFalsy();
    });
  });

  describe('when submitting the form', () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation();

    beforeEach(() => {
      render(<Form />);
    });

    afterEach(() => {
      consoleLog.mockReset();
    });

    it('should do nothing in case any field is missing to be filled', () => {
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

      expect(consoleLog).not.toHaveBeenCalled();
    });

    it('should log the form values to the console, in case all the fields are filled correctly', () => {
      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'Brazil' },
      });
      fireEvent.change(screen.getByLabelText(/first name/i), {
        target: { value: 'Thomas' },
      });
      fireEvent.change(screen.getByLabelText(/last name/i), {
        target: { value: 'Anderson' },
      });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

      expect(consoleLog).toHaveBeenCalledWith({
        country: 'Brazil',
        firstName: 'Thomas',
        lastName: 'Anderson',
      });
    });
  });
});
