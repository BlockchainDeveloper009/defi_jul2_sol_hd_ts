// pages/api/file.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = 'Hello, world!';
    await fs.promises.writeFile('example.txt', data);
    res.status(200).json({ message: 'File written successfully' });
  } catch (error) {
    console.error('Error writing file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
