import { useState } from 'react';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const isFirstNameValid = firstName.trim().length > 0;

  const [lastName, setLastName] = useState('');
  const isLastNameValid = lastName.trim().length > 0;

  const [country, setCountry] = useState('');
  const isCountryValid = country.trim().length > 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = isFirstNameValid && isCountryValid && isLastNameValid;
    if (!isValid) return;

    console.log({ country, firstName, lastName });
  };

  return (
    <form aria-label="Employee Onboarding" onSubmit={handleSubmit}>
      <select
        name="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
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
        onChange={(event) => setFirstName(event.target.value)}
        required
      />

      <label htmlFor="lastName">Last name</label>
      <input
        aria-label="Last name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      />

      <label htmlFor="dateOfBirth">Date of birth</label>
      <input
        type="date"
        name="dateOfBirth"
        aria-label="Date of birth"
        min="2018-01-01"
        max="2018-12-31"
        required
      ></input>

      <label htmlFor="holidayAllowance">Holiday allowance</label>
      <input
        aria-label="Holiday allowance"
        type="number"
        name="holidayAllowance"
        required
      />

      {country === 'Brazil' && (
        <>
          <label htmlFor="workingHours">Working hours</label>
          <input
            aria-label="Working hours"
            type="number"
            name="workingHours"
            required
          />
        </>
      )}

      {country === 'Ghana' && (
        <>
          <label htmlFor="maritalStatus">Marital status</label>
          <input aria-label="Marital status" type="text" name="maritalStatus" />

          <label htmlFor="numberOfChildren">Number of children</label>
          <input
            aria-label="Number of children"
            type="number"
            name="numberOfChildren"
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
