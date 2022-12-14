import { useState } from 'react';

export const useOnboardingForm = () => {
  const [country, setCountry] = useState('');
  // TODO: Validate enum
  const isCountryValid = country.trim().length > 0;
  const onCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCountry(event.target.value);

  const [firstName, setFirstName] = useState('');
  const isFirstNameValid = firstName.trim().length > 0;
  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value);

  const [lastName, setLastName] = useState('');
  const isLastNameValid = lastName.trim().length > 0;
  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value);

  const [dateOfBirth, setDateOfBirth] = useState('');
  // TODO: Validate date format
  const isDateOfBirthValid = dateOfBirth.trim().length > 0;
  const onDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDateOfBirth(event.target.value);

  const [holidayAllowance, setHolidayAllowance] = useState('');
  // TODO: Rules
  const isHolidayAllowanceValid = Boolean(Number(holidayAllowance));
  const onHolidayAllowanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setHolidayAllowance(event.target.value);

  const [workingHours, setWorkingHours] = useState('');
  // TODO: Rules
  const isWorkingHoursValid = Boolean(Number(holidayAllowance));
  const onWorkingHoursChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setWorkingHours(event.target.value);

  const [maritalStatus, setMaritalStatus] = useState('');
  const isMaritalStatusValid = maritalStatus.trim().length > 0;
  const onMaritalStatusChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMaritalStatus(event.target.value);

  const [numberOfChildren, setNumberOfChildren] = useState('');
  const isNumberOfChildrenValid = numberOfChildren.trim().length > 0;
  const onNumberOfChildrenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setNumberOfChildren(event.target.value);

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
    workingHours,
    onWorkingHoursChange,
    maritalStatus,
    onMaritalStatusChange,
    numberOfChildren,
    onNumberOfChildrenChange,
  };
};
