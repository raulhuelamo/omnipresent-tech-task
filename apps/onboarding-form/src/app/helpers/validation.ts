export const isValidString = (value: string) => {
  if (value.trim().length === 0) return false;
  return true;
};

export const isValidNumber = (value: string) => {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
};

export const isValidCountry = (value: string) => {
  const countries = ['Brazil', 'Ghana', 'Spain'];
  return countries.includes(value);
};

export const isValidShortIsoDate = (value: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (value.match(regex) === null) {
    return false;
  }

  const date = new Date(value);
  return date.toISOString().startsWith(value);
};
