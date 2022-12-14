import { useOnboardingForm } from '../hooks/useOnboardingForm';
import { toShortISOString } from '../helpers/toShortISOString';

export const Form = () => {
  const today = toShortISOString(new Date());

  const {
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
    socialInsuranceNumber,
    onSocialInsuranceNumberChange,
  } = useOnboardingForm();

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
            value={maritalStatus}
            onChange={onMaritalStatusChange}
            required
          />

          <label htmlFor="socialInsuranceNumber">Social insurance number</label>
          <input
            aria-label="Social insurance number"
            type="text"
            name="socialInsuranceNumber"
            value={socialInsuranceNumber}
            onChange={onSocialInsuranceNumberChange}
            required
          />
        </>
      )}

      <button>Submit</button>
    </form>
  );
};
