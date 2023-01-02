const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote
const newQuote = () => {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if author field is blank
  if(!quote.author){
    authorText.textContent = 'Unknown'
  } else {
    authorText.textContent = quote.author; 
  }

  // Change font size if quote is too long
  if(quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  quoteText.textContent = quote.text;
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