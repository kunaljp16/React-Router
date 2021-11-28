import QuoteForm from "../quotes/QuoteForm";

const NewQuotes = () => {
  const addQuoteHandler = (quotesData) => {
    console.log(quotesData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler}/>;
};

export default NewQuotes;
    