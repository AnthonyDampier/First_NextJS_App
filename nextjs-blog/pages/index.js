import Head from 'next/head';
import Script from 'next/script';
import Layout, { siteTitle } from '../components/layout';
import Button from '../components/Button';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/alert.js'
import { useEffect } from 'react';

export default function Home() {

  // will be variable for success or error returns;
  let type = 'success'; 
  const errorOrSuccess = () => {
    console.log('in errorOrSuccess');
    const oneOrTwo = Math.ceil(Math.random() * 2);

    switch(oneOrTwo){
      case 1:
        console.log('success: ', oneOrTwo);
        type='success';
        break;
      case 2: 
        console.log('error:', oneOrTwo);
        type='error';
        break;
    }
    console.log(type);
  }

  useEffect(() => {

  }, [type]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Anthony</b>. I'm a Software Engineer and Digital Marking Professional.
        </p>
        <hr/>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        {/* <button
          onClick ={() => errorOrSuccess()}
        >
          Error / Success test
        </button>
        <p className={type == 'success' ? 'success' : 'error'}>Click for random Error or Success Alert{type}</p> */}
      </section>
      
    </Layout>
  );
}