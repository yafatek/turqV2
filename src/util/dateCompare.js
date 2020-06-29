export function isPastEndDate(endDate) {
  const compDate = new Date(parseInt(endDate));
  const today = new Date();

  return today > compDate
}