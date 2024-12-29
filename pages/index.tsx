import Head from 'next/head';
import React from 'react';

export default function Index() {
  return (<>
    <Head>
      <title>Square Packing</title>
      <meta name='description' content='Packing unit squares in squares' />
    </Head>
    <div className='flex flex-col items-center mx-8 gap-12 text-center'>
      <h1 className='text-3xl font-medium m-12'>Packing Unit Squares in Squares</h1>
    </div>
  </>);
}
