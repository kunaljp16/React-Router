import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author:'Kunal',
        text:'React learning is really fun.'
    },
    {
        id: 'q2',
        author:'Kenisha',
        text:'React learning is really fun.'
    }
];


const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}>
      
  </QuoteList>
};

export default AllQuotes;
