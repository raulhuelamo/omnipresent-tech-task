export const toShortISOString = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
