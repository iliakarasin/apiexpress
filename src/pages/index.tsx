import { useState } from 'react';
import Head from 'next/head';

import { Hero } from '@/components/Hero/Hero';
import { JSON as JSONComponent } from '@/components/JSON/JSON';
import { Prompt, PromptValues } from '@/components/Prompt/Prompt';
import { Loader } from '@/components/Loader/Loader';

const generateAPIUrl = (values: PromptValues): string => {
  let route = '';
  let { url, prompt, schema, count } = values;
  if ( ! url.startsWith('/api/') ) url = `/api/${url}`;

  prompt = encodeURIComponent(prompt);
  schema = encodeURIComponent(schema);

  route = `${url}?prompt=${prompt}&schema=${schema}&count=${count}`;

  return route;
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState<string>('');

  const handlePromptChange = (values: PromptValues) => {
    generateJSON(values);
  };

  const generateJSON = async (values: PromptValues) => {
    setLoading(true);

    const url = generateAPIUrl(values);
    const response = await fetch(url);
    const data = await response.json();
    setCode(JSON.stringify(data, null, 2));
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>APIExpress</title>
        <meta name="description" content="Generate APIs with content generation AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="APIExpress" subheading="The AI powered API generator" />
      <main>
        <Prompt onPromptSubmission={handlePromptChange} userCanGenerate={!loading} />

        {loading && <Loader />}
        {!loading && <JSONComponent code={code} />}
      </main>
    </>
  );
};
