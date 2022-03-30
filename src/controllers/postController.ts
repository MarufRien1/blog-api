import posts from '../posts-list';

import express, { Request, Response } from 'express';

//response with array of post
export const getPosts = (req: Request, res: Response) => {
  res.status(200).json(posts);
};
