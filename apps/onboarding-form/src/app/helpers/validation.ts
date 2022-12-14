export const isValidString = (value: unknown) => {
  if (typeof value !== 'string') return false;
  if (value.trim().length === 0) return false;
  return true;
};
export const isValidNumber = (value: unknown) => {
  if (typeof value !== 'string') return false;
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
};

export const isValidCountry = (value: unknown) => {
  if (typeof value !== 'string') return false;
  const countries = ['Brazil', 'Ghana', 'Spain'];
  return countries.includes(value);
};

export const isValidShortIsoDate = (value: unknown) => {
  if (typeof value !== 'string') return false;

  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (value.match(regex) === null) {
    return false;
  }

  const date = new Date(value);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(value);
};
