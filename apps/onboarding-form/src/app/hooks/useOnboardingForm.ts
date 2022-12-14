import { useState } from 'react';

import {
  isValidString,
  isValidNumber,
  isValidCountry,
  isValidShortIsoDate,
} from '../helpers/validation';

export const useOnboardingForm = () => {
  const [country, setCountry] = useState('');
  const isCountryValid = isValidCountry(country);
  const onCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCountry(event.target.value);

  const [firstName, setFirstName] = useState('');
  const isFirstNameValid = isValidString(firstName);
  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value);

  const [lastName, setLastName] = useState('');
  const isLastNameValid = isValidString(lastName);
  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value);

  const [dateOfBirth, setDateOfBirth] = useState('');
  const isDateOfBirthValid = isValidShortIsoDate(dateOfBirth);
  const onDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDateOfBirth(event.target.value);

  const [holidayAllowance, setHolidayAllowance] = useState('');
  const minimumHolidayAllowance = country === 'Spain' ? 30 : 0;
  const maximumHolidayAllowance = country === 'Brazil' ? 40 : Infinity;
  const isHolidayAllowanceValid =
    isValidNumber(holidayAllowance) &&
    Number(holidayAllowance) >= minimumHolidayAllowance &&
    Number(holidayAllowance) <= maximumHolidayAllowance;
  const onHolidayAllowanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setHolidayAllowance(event.target.value);

  const [workingHours, setWorkingHours] = useState('');
  const isWorkingHoursValid = isValidNumber(holidayAllowance);
  const onWorkingHoursChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setWorkingHours(event.target.value);

  const [maritalStatus, setMaritalStatus] = useState('');
  const isMaritalStatusValid = isValidString(maritalStatus);
  const onMaritalStatusChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMaritalStatus(event.target.value);

  const [numberOfChildren, setNumberOfChildren] = useState('');
  const isNumberOfChildrenValid = isValidNumber(numberOfChildren);
  const onNumberOfChildrenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setNumberOfChildren(event.target.value);

  const [socialInsuranceNumber, setSocialInsuranceNumber] = useState('');
  const isSocialInsuranceNumberValid = isValidString(socialInsuranceNumber);
  const onSocialInsuranceNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSocialInsuranceNumber(event.target.value);

  const validateForm = () => {
    if (country === 'Brazil') {
      return (
        isCountryValid &&
        isFirstNameValid &&
        isLastNameValid &&
        isDateOfBirthValid &&
        isHolidayAllowanceValid &&
        isWorkingHoursValid
      );
    }

    if (country === 'Ghana') {
      return (
        isCountryValid &&
        isFirstNameValid &&
        isLastNameValid &&
        isDateOfBirthValid &&
        isHolidayAllowanceValid &&
        isMaritalStatusValid &&
        isNumberOfChildrenValid
      );
    }

    if (country === 'Spain') {
      return (
        isCountryValid &&
        isFirstNameValid &&
        isLastNameValid &&
        isDateOfBirthValid &&
        isHolidayAllowanceValid &&
        isMaritalStatusValid &&
        isSocialInsuranceNumberValid
      );
    }

    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    const onboardedEmployee = {
      country,
      firstName,
      lastName,
      dateOfBirth,
      holidayAllowance: Number(holidayAllowance),

      ...(country === 'Brazil' && {
        workingHours: Number(workingHours),
      }),

      ...(country === 'Ghana' && {
        maritalStatus,
        numberOfChildren: Number(numberOfChildren),
      }),

      ...(country === 'Spain' && {
        maritalStatus,
        socialInsuranceNumber,
      }),
    };

    console.log(onboardedEmployee);
  };

  return {
    handleSubmit,
    country,
    onCountryChange,
    firstName,
    onFirstNameChange,
    lastName,
    onLastNameChange,
    dateOfBirth,
    onDateOfBirthChange,
    holidayAllowance,
    onHolidayAllowanceChange,
    minimumHolidayAllowance,
    maximumHolidayAllowance,
    workingHours,
    onWorkingHoursChange,
    maritalStatus,
    onMaritalStatusChange,
    numberOfChildren,
    onNumberOfChildrenChange,
    socialInsuranceNumber,
    onSocialInsuranceNumberChange,
  };
};
