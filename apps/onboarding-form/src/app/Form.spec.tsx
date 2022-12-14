import { fireEvent, render, screen } from '@testing-library/react';

import { Form } from './Form';

enum Country {
  Brazil = 'Brazil',
  Ghana = 'Ghana',
  Spain = 'Spain',
}

describe('Form', () => {
  let countryField: HTMLSelectElement;
  let countryFieldUnselectedOption: HTMLOptionElement;
  let countryFieldBrazilOption: HTMLOptionElement;
  let countryFieldGhanaOption: HTMLOptionElement;
  let countryFieldSpainOption: HTMLOptionElement;
  let firstNameField: HTMLInputElement;
  let lastNameField: HTMLInputElement;
  let dateOfBirthField: HTMLInputElement;
  let holidayAllowanceField: HTMLInputElement;
  let submitButton: HTMLButtonElement;

  let workingHoursField: HTMLInputElement | null;
  let numberOfChildrenField: HTMLInputElement | null;
  let maritalStatusField: HTMLInputElement | null;
  let socialInsuranceNumberField: HTMLInputElement | null;

  const arrangeComponent = (country?: Country) => {
    render(<Form />);

    countryField = screen.getByRole('combobox');
    countryFieldUnselectedOption = screen.getByRole<HTMLOptionElement>(
      'option',
      { name: /country/i }
    );
    countryFieldBrazilOption = screen.getByRole<HTMLOptionElement>('option', {
      name: 'Brazil',
    });
    countryFieldGhanaOption = screen.getByRole<HTMLOptionElement>('option', {
      name: 'Ghana',
    });
    countryFieldSpainOption = screen.getByRole<HTMLOptionElement>('option', {
      name: 'Spain',
    });

    firstNameField = screen.getByLabelText(/first name/i);
    lastNameField = screen.getByLabelText(/last name/i);
    dateOfBirthField = screen.getByLabelText(/date of birth/i);
    holidayAllowanceField = screen.getByLabelText(/holiday allowance/i);

    submitButton = screen.getByRole('button', { name: 'Submit' });

    if (!country) return;

    fireEvent.change(countryField, {
      target: { value: country },
    });

    workingHoursField = screen.queryByLabelText(/working hours/i);
    numberOfChildrenField = screen.queryByLabelText(/number of children/i);
    maritalStatusField = screen.queryByLabelText(/marital status/i);
    socialInsuranceNumberField = screen.queryByLabelText(
      /social insurance number/i
    );
  };

  describe('by default', () => {
    beforeEach(() => {
      arrangeComponent();
    });

    it('should render a "Country of work" field, and its options', () => {
      expect(countryField).toBeTruthy();
      expect(countryFieldUnselectedOption.selected).toBeTruthy();
      expect(countryFieldSpainOption.selected).toBeFalsy();
      expect(countryFieldGhanaOption.selected).toBeFalsy();
      expect(countryFieldBrazilOption.selected).toBeFalsy();
    });

    it('should render "First name" field', () => {
      expect(firstNameField).toBeTruthy();
    });

    it('should render "Last name" field', () => {
      expect(lastNameField).toBeTruthy();
    });

    it('should render "Date of birth" field', () => {
      expect(dateOfBirthField).toBeTruthy();
    });

    it('should render "Holiday allowance" field', () => {
      expect(holidayAllowanceField).toBeTruthy();
    });

    it('should render a Submit button', () => {
      expect(submitButton).toBeTruthy();
    });
  });

  describe('when the selected country is Brazil', () => {
    beforeEach(() => {
      arrangeComponent(Country.Brazil);
    });

    it('should have Brazil selected as a country', () => {
      expect(countryFieldBrazilOption.selected).toBeTruthy();
    });

    it('should render its country-specific fields', () => {
      expect(workingHoursField).toBeTruthy();
    });

    it('should not render any country-specific fields from different countries', () => {
      expect(numberOfChildrenField).toBeFalsy();
      expect(maritalStatusField).toBeFalsy();
      expect(socialInsuranceNumberField).toBeFalsy();
    });
  });

  describe('when the selected country is Spain', () => {
    beforeEach(() => {
      arrangeComponent(Country.Spain);
    });

    it('should have Spain selected as a country', () => {
      expect(countryFieldSpainOption.selected).toBeTruthy();
    });

    it('should render its country-specific fields', () => {
      expect(maritalStatusField).toBeTruthy();
      expect(socialInsuranceNumberField).toBeTruthy();
    });

    it('should not render any country-specific fields from different countries', () => {
      expect(workingHoursField).toBeFalsy();
      expect(numberOfChildrenField).toBeFalsy();
    });
  });

  describe('when the selected country is Ghana', () => {
    beforeEach(() => {
      arrangeComponent(Country.Ghana);
    });

    it('should have Ghana selected as a country', () => {
      expect(countryFieldGhanaOption.selected).toBeTruthy();
    });

    it('should render its country-specific fields', () => {
      expect(numberOfChildrenField).toBeTruthy();
      expect(maritalStatusField).toBeTruthy();
    });

    it('should not render any country-specific fields from different countries', () => {
      expect(workingHoursField).toBeFalsy();
      expect(socialInsuranceNumberField).toBeFalsy();
    });
  });

  describe('when submitting the form', () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation();

    beforeEach(() => {
      arrangeComponent();
    });

    afterEach(() => {
      consoleLog.mockReset();
    });

    it('should do nothing in case any field is missing to be filled', () => {
      fireEvent.click(submitButton);

      expect(consoleLog).not.toHaveBeenCalled();
    });

    it('should log the form values to the console, in case all the fields are filled correctly', () => {
      fireEvent.change(countryField, {
        target: { value: 'Brazil' },
      });
      fireEvent.change(firstNameField, {
        target: { value: 'Thomas' },
      });
      fireEvent.change(lastNameField, {
        target: { value: 'Anderson' },
      });
      fireEvent.click(submitButton);

      expect(consoleLog).toHaveBeenCalledWith({
        country: 'Brazil',
        firstName: 'Thomas',
        lastName: 'Anderson',
      });
    });
  });
});
