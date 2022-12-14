import { useState } from 'react';

export const Form = () => {
  const [country, setCountry] = useState('');

  return (
    <form aria-label="Employee Onboarding">
      <select
        name="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="" disabled>
          Select a country
        </option>
        <option>Spain</option>
        <option>Ghana</option>
        <option>Brazil</option>
      </select>

      <label htmlFor="firstName">First name</label>
      <input aria-label="First name" type="text" name="firstName" />

      <label htmlFor="lastName">Last name</label>
      <input aria-label="Last name" type="text" name="lastName" />

      <label htmlFor="dateOfBirth">Date of birth</label>
      <input
        type="date"
        name="dateOfBirth"
        aria-label="Date of birth"
        min="2018-01-01"
        max="2018-12-31"
      ></input>

      <label htmlFor="holidayAllowance">Holiday allowance</label>
      <input
        aria-label="Holiday allowance"
        type="number"
        name="holidayAllowance"
      />

      {country === 'Brazil' && (
        <>
          <label htmlFor="workingHours">Working hours</label>
          <input aria-label="Working hours" type="number" name="workingHours" />
        </>
      )}
    </form>
  );
};
