// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateResponse } from '@/utils/generateResponse';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prompt = req.query.prompt as string;
  const schema = req.query.schema as string;
  const count = Number.parseInt(req.query.count as string || '1');

  if ( ! prompt || ! schema || ! count ) {
    res.status(400).json({ error: 'Missing query parameters.' });
    return;
  }

  const response = await generateResponse({
    path: req.url || '/api',
    prompt,
    schema,
    count,
  });

  res.status(200).json(response)
}
