export default function capitalize(str: string): string {
  try {
    const words = str.split(' ');
    const capitalizedWords = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
    return capitalizedWords;
  } catch (error) {
    return str;
  }
}
