import { useEffect, useState } from "react"


const QuoteGenerator = () => {
    const [quoteText, setQuoteText] = useState([]);
    const [author, setAuthor] = useState([]);
  const getQuote = async () => {
    try {
      const response = await fetch ("https://api.quotable.io/random");
      const data = await response.json();
      const {content, author} = data; 
      const twitterShareURL = `https://twitter.com/intent/tweet?text="${content}" -${author}`;
      setQuoteText(`"${content}" - ${author}`);
      setAuthor(twitterShareURL);
    } catch (error) {
     console.error("error fetching data:", error);
    }
  }
  
useEffect(()=>{
    getQuote();
    },[])
    

  return (
   <div className=' flex flex-col items-center justify-center min-h-screen
     bg-gradient-to-r from-teal-700 to-blue-700'>
      <h1 className=' text-2xl font-bold'>QUOTE OF THE DAY</h1>
    <div className=' mt-4 w-2/4 p-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md'>
  
  <p id='qoute-text'>{quoteText}</p>

  <div className=' mt-5 flex justify-evenly'>
    <button className=' py-2 px-3   shadow-md bg-blue-700
     text-white' onClick={getQuote}>New Quote</button>
    <a className=' font-semibold  py-2 px-3    bg-cyan-500 shadow-md' href={author} target='_blank'>
    Share on twitter
    </a>
  </div>
    </div>
   
    </div>
  )
}

export default QuoteGenerator