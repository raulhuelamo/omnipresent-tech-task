import { fireEvent, render, screen } from '@testing-library/react';

import { Form } from './Form';

enum Country {
  Brazil = 'Brazil',
  Ghana = 'Ghana',
  Spain = 'Spain',
}

type FormFixture = {
  firstName: string;
  lastName: string;
  country: Country | '';
  dateOfBirth: string;
};

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

  const arrangeForm = (country?: Country) => {
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

  const fillForm = ({
    firstName,
    lastName,
    country,
    dateOfBirth,
  }: FormFixture) => {
    fireEvent.change(countryField, {
      target: { value: country },
    });
    fireEvent.change(firstNameField, {
      target: { value: firstName },
    });
    fireEvent.change(lastNameField, {
      target: { value: lastName },
    });
    fireEvent.change(dateOfBirthField, {
      target: { value: dateOfBirth },
    });
  };

  const clearForm = () => {
    fillForm({
      country: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    });
  };

  const submitForm = () => {
    fireEvent.click(submitButton);
  };

  describe('by default', () => {
    beforeEach(() => {
      arrangeForm();
    });

    test('render "Country of work" field, and its options', () => {
      expect(countryField).toBeTruthy();
      expect(countryFieldUnselectedOption.selected).toBeTruthy();
      expect(countryFieldSpainOption.selected).toBeFalsy();
      expect(countryFieldGhanaOption.selected).toBeFalsy();
      expect(countryFieldBrazilOption.selected).toBeFalsy();
    });

    test('render "First name" field', () => {
      expect(firstNameField).toBeTruthy();
    });

    test('render "Last name" field', () => {
      expect(lastNameField).toBeTruthy();
    });

    test('render "Date of birth" field', () => {
      expect(dateOfBirthField).toBeTruthy();
    });

    test('render "Holiday allowance" field', () => {
      expect(holidayAllowanceField).toBeTruthy();
    });

    test('render a Submit button', () => {
      expect(submitButton).toBeTruthy();
    });
  });

  describe('when the selected country is Brazil', () => {
    beforeEach(() => {
      arrangeForm(Country.Brazil);
    });

    test('have Brazil selected as a country', () => {
      expect(countryFieldBrazilOption.selected).toBeTruthy();
    });

    test('render its country-specific fields', () => {
      expect(workingHoursField).toBeTruthy();
    });

    test('not render any country-specific fields from different countries', () => {
      expect(numberOfChildrenField).toBeFalsy();
      expect(maritalStatusField).toBeFalsy();
      expect(socialInsuranceNumberField).toBeFalsy();
    });
  });

  describe('when the selected country is Spain', () => {
    beforeEach(() => {
      arrangeForm(Country.Spain);
    });

    test('have Spain selected as a country', () => {
      expect(countryFieldSpainOption.selected).toBeTruthy();
    });

    test('render its country-specific fields', () => {
      expect(maritalStatusField).toBeTruthy();
      expect(socialInsuranceNumberField).toBeTruthy();
    });

    test('not render any country-specific fields from different countries', () => {
      expect(workingHoursField).toBeFalsy();
      expect(numberOfChildrenField).toBeFalsy();
    });
  });

  describe('when the selected country is Ghana', () => {
    beforeEach(() => {
      arrangeForm(Country.Ghana);
    });

    test('have Ghana selected as a country', () => {
      expect(countryFieldGhanaOption.selected).toBeTruthy();
    });

    test('render its country-specific fields', () => {
      expect(numberOfChildrenField).toBeTruthy();
      expect(maritalStatusField).toBeTruthy();
    });

    test('not render any country-specific fields from different countries', () => {
      expect(workingHoursField).toBeFalsy();
      expect(socialInsuranceNumberField).toBeFalsy();
    });
  });

  describe('when submitting the form', () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation();

    beforeEach(() => {
      arrangeForm();
    });

    afterEach(() => {
      consoleLog.mockReset();
    });

    test('if any field is missing to be filled, do nothing', () => {
      clearForm();

      submitForm();

      expect(consoleLog).not.toHaveBeenCalled();
    });

    test('for Brazil, if all the fields are filled correctly, log the onboarded employee to the console', () => {
      fillForm({
        country: Country.Brazil,
        firstName: 'Thomas',
        lastName: 'Anderson',
        dateOfBirth: '1962-03-11',
      });

      submitForm();

      expect(consoleLog).toHaveBeenCalledWith({
        country: 'Brazil',
        firstName: 'Thomas',
        lastName: 'Anderson',
        dateOfBirth: '1962-03-11',
      });
    });
  });
});
