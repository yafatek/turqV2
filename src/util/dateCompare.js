export function isPastEndDate(endDate) {
  if (endDate === null || endDate === undefined) { 
    return false
  }
  const compDate = new Date(endDate);
  const today = new Date();

  return today > compDate
}