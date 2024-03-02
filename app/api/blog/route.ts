// /api/blogs/submit.js

import connectToDatabase from "@/utils/mongodb";

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { content } = req.body;

    const db = await connectToDatabase();
    const collection = db.collection('blogs');

    try {
      const result = await collection.insertOne({ content });
      res.status(200).json({ message: 'Blog submitted successfully', postId: result.insertedId });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
