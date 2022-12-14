import { useState } from 'react';

const toShortISOString = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const Form = () => {
  const today = toShortISOString(new Date());

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

  return (
    <form aria-label="Employee Onboarding" onSubmit={handleSubmit}>
      <select
        name="country"
        value={country}
        onChange={onCountryChange}
        required
      >
        <option value="" disabled>
          Select a country
        </option>
        <option>Brazil</option>
        <option>Ghana</option>
        <option>Spain</option>
      </select>

      <label htmlFor="firstName">First name</label>
      <input
        aria-label="First name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={onFirstNameChange}
        required
      />

      <label htmlFor="lastName">Last name</label>
      <input
        aria-label="Last name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={onLastNameChange}
        required
      />

      <label htmlFor="dateOfBirth">Date of birth</label>
      <input
        type="date"
        name="dateOfBirth"
        aria-label="Date of birth"
        max={today}
        value={dateOfBirth}
        onChange={onDateOfBirthChange}
        required
      ></input>

      <label htmlFor="holidayAllowance">Holiday allowance</label>
      <input
        aria-label="Holiday allowance"
        type="number"
        name="holidayAllowance"
        value={holidayAllowance}
        onChange={onHolidayAllowanceChange}
        required
      />

      {country === 'Brazil' && (
        <>
          <label htmlFor="workingHours">Working hours</label>
          <input
            aria-label="Working hours"
            type="number"
            name="workingHours"
            value={workingHours}
            onChange={onWorkingHoursChange}
            required
          />
        </>
      )}

      {country === 'Ghana' && (
        <>
          <label htmlFor="maritalStatus">Marital status</label>
          <input
            aria-label="Marital status"
            type="text"
            name="maritalStatus"
            value={maritalStatus}
            onChange={onMaritalStatusChange}
            required
          />

          <label htmlFor="numberOfChildren">Number of children</label>
          <input
            aria-label="Number of children"
            type="number"
            name="numberOfChildren"
            value={numberOfChildren}
            onChange={onNumberOfChildrenChange}
            required
          />
        </>
      )}

      {country === 'Spain' && (
        <>
          <label htmlFor="maritalStatus">Marital status</label>
          <input
            aria-label="Marital status"
            type="text"
            name="maritalStatus"
            required
          />

          <label htmlFor="socialInsuranceNumber">Social insurance number</label>
          <input
            aria-label="Social insurance  number"
            type="text"
            name="socialInsuranceNumber"
            required
          />
        </>
      )}

      <button>Submit</button>
    </form>
  );
};
