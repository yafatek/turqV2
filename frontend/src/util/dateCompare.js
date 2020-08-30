export function isPastEndDate(endDate) {
  const compDate = new Date(endDate);
  const today = new Date();

  return today > compDate
}