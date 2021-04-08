import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import axios from "axios";
import { useState } from "react";
import { siteTitle } from '../components/Seo'

import Quote from '../components/Quote'
import Button from '../components/Button'


let url = "https://my-nano-quotes-api.herokuapp.com/quotes";
const fetchData = async () =>
  await axios
    .get(url)
    .then((res) => ({
      error: false,
      quotes: res.data,
    }))
    .catch((err) => ({
      error: true,
      quotes: null,
    }));

const getRandomQuote = (quoteList) => {
  const quoteCount = quoteList.length;
  const randomKey = Math.floor(Math.random() * quoteCount);
  return quoteList[randomKey];
};



export default function Home({ quotes, error}) {
  
  if (error) return <div>failed to load</div>;
  if (!quotes) return <div>Loading...</div>;
  
  
  const quoteList = quotes.map((quote) => ({
    quote: quote.quote,
    author: quote.source,
    link: quote.link,
  }));

  const defaultQuote = getRandomQuote(quoteList);

  const [randomQuote, setRandomQuote] = useState(defaultQuote);

  const handleClick = () => {
    const newRandomQuote = getRandomQuote(quoteList);
    setRandomQuote(newRandomQuote);
  };


  return (
    <div suppressHydrationWarning={true}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main suppressHydrationWarning={true}>
        <Quote handleClick={handleClick} suppressHydrationWarning={true} quote={randomQuote}>
        
        </Quote>
        {/* <Button handleClick={handleClick} /> */}
      </main>


    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetchData();

  return {
    props: data,
  };
}