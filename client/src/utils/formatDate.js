function formatDate(date) {
  // Return an empty string or a fallback if the date is missing
  if (!date) return ''; 
  
  const parsedDate = new Date(date);
  
  // Check if the resulting date object is valid
  if (isNaN(parsedDate.getTime())) return 'Invalid Date';
  
  return new Intl.DateTimeFormat().format(parsedDate);
}

export default formatDate;