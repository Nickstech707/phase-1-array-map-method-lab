const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to convert tutorial titles to title case
const titleCased = () => {
  // Maps over each tutorial title
  return tutorials.map((line) => {
    // Splits the title into individual words
    const tokens = line.split(" ");
    // Capitalize the first letter of each word
    const capitalizedTokens = tokens.map(
      (token) => token.charAt(0).toUpperCase() + token.slice(1)
    );
    // Joins the capitalized words back into a single string
    const response = capitalizedTokens.join(" ");
    // Returns the title-cased title
    return response;
  });
};