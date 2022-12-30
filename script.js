// Get Quote

let apiQuotes = [];

// Show new quote
const newQuote = () => {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

const getQuotes = async () => {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  
  try { 
    const response = await fetch(apiUrl)
    apiQuotes = await response.json();
    newQuote();
  } catch (error) { 
    console.error(error);
  }
}

getQuotes();