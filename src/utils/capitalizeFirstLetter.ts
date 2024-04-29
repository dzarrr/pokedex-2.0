function capitalizeFirstLetter(text?: string) {
  if (text === undefined) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default capitalizeFirstLetter;
