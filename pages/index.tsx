import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { InlineMath } from 'react-katex';

interface Item {
  n: number;
  svg: string;
  s_n: number;
  s_n_latex?: string;
  s_n_lower?: number;
  s_n_lower_latex?: string;
  found_author?: string;
  found_date?: string;
  proved_author?: string;
  proved_date?: string;
}

export default function Index() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        return response.json();
      })
      .then(jsonData => setData(jsonData as Item[]))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  return (<>
    <Head>
      <title>Square Packing</title>
      <meta name='description' content='Packing unit squares in squares' />
    </Head>
    <div className='flex flex-col items-center mx-8 mb-16 gap-12 text-center'>
      <h1 className='text-3xl font-medium m-12'>Packing Unit Squares in Squares</h1>
      <div className='flex flex-wrap justify-center gap-4'>
        {data.map((item, index) => (
          <div key={index} className='flex flex-col items-center gap-4 max-w-80 w-80'>
            <h2 className='text-3xl font-medium'>{item.n}</h2>
            <Image src={`svg/${item.svg}`} alt={`item-${item.n}`} width={309.31} height={309.31} />
            <div className='text-sm max-w-80'><InlineMath math={`s = ${item.s_n}`} /></div>
            {item.s_n_latex && <div className='text-sm max-w-80'><InlineMath math={item.s_n_latex} /></div>}
            {item.found_author && <span>Found by {item.found_author} in {item.found_date}.</span>}
            {item.proved_author && <span>Proved by {item.proved_author} in {item.proved_date}.</span>}
          </div>
        ))}
      </div>
    </div>
  </>);
}
