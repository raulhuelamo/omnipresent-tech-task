import { useOnboardingForm } from '../hooks/useOnboardingForm';
import { toShortISOString } from '../helpers/date';

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
  } = useOnboardingForm();

  return (
    <form
      className="flex flex-wrap"
      aria-label="Employee Onboarding"
      onSubmit={handleSubmit}
    >
      <div className="w-full px-2">
        <label
          htmlFor="country"
          className="font-semibold text-sm text-gray-900 pb-1 block"
        >
          Country
        </label>
        <select
          name="country"
          value={country}
          onChange={onCountryChange}
          required
          className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        >
          <option value="" disabled>
            Select a country
          </option>
          <option>Brazil</option>
          <option>Ghana</option>
          <option>Spain</option>
        </select>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/3 px-2">
        <label
          htmlFor="firstName"
          className="font-semibold text-sm text-gray-900 pb-1 block"
        >
          First name
        </label>
        <input
          aria-label="First name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={onFirstNameChange}
          required
          className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
      </div>

      <div className="w-full md:w-1/3 lg:w-1/3 px-2">
        <label
          htmlFor="lastName"
          className="font-semibold text-sm text-gray-900 pb-1 block"
        >
          Last name
        </label>
        <input
          aria-label="Last name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={onLastNameChange}
          required
          className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
      </div>

      <div className="w-full md:w-1/3 lg:w-1/3 px-2">
        <label
          htmlFor="dateOfBirth"
          className="font-semibold text-sm text-gray-900 pb-1 block"
        >
          Date of birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          aria-label="Date of birth"
          max={today}
          value={dateOfBirth}
          onChange={onDateOfBirthChange}
          required
          className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        ></input>
      </div>

      <div className="w-full md:w-1/2 px-2">
        <label
          htmlFor="holidayAllowance"
          className="font-semibold text-sm text-gray-900 pb-1 block"
        >
          Holiday allowance
        </label>
        <input
          aria-label="Holiday allowance"
          type="number"
          name="holidayAllowance"
          value={holidayAllowance}
          onChange={onHolidayAllowanceChange}
          min={minimumHolidayAllowance}
          max={maximumHolidayAllowance}
          step="1"
          required
          className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
      </div>

      {country === 'Brazil' && (
        <div className="w-full md:w-1/2 px-2">
          <label
            htmlFor="workingHours"
            className="font-semibold text-sm text-gray-900 pb-1 block"
          >
            Working hours
          </label>
          <input
            aria-label="Working hours"
            type="number"
            name="workingHours"
            value={workingHours}
            onChange={onWorkingHoursChange}
            required
            className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
        </div>
      )}

      {country === 'Ghana' && (
        <>
          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="numberOfChildren"
              className="font-semibold text-sm text-gray-900 pb-1 block"
            >
              Number of children
            </label>
            <input
              aria-label="Number of children"
              type="number"
              name="numberOfChildren"
              value={numberOfChildren}
              onChange={onNumberOfChildrenChange}
              required
              className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
          </div>

          <div className="w-full px-2">
            <label
              htmlFor="maritalStatus"
              className="font-semibold text-sm text-gray-900 pb-1 block"
            >
              Marital status
            </label>
            <input
              aria-label="Marital status"
              type="text"
              name="maritalStatus"
              value={maritalStatus}
              onChange={onMaritalStatusChange}
              required
              className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
          </div>
        </>
      )}

      {country === 'Spain' && (
        <>
          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="socialInsuranceNumber"
              className="font-semibold text-sm text-gray-900 pb-1 block"
            >
              Social insurance number
            </label>
            <input
              aria-label="Social insurance number"
              type="text"
              name="socialInsuranceNumber"
              value={socialInsuranceNumber}
              onChange={onSocialInsuranceNumberChange}
              required
              className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
          </div>

          <div className="w-full px-2">
            <label
              htmlFor="maritalStatus"
              className="font-semibold text-sm text-gray-900 pb-1 block"
            >
              Marital status
            </label>
            <input
              aria-label="Marital status"
              type="text"
              name="maritalStatus"
              value={maritalStatus}
              onChange={onMaritalStatusChange}
              required
              className="border border-gray-600 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
          </div>
        </>
      )}

      <button className="bg-pink-500 hover:bg-pink-600 transition duration-200 text-white w-full py-2 mx-2 mt-2 rounded-lg text-lg font-semibold text-center inline-block">
        Submit
      </button>
    </form>
  );
};
