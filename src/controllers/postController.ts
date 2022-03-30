import posts from '../posts-list';

import express, { Request, Response } from 'express';

//response with array of post
export const getPosts = (req: Request, res: Response) => {
  res.status(200).json(posts);
};

// response with a single post
export const getPost = (req: Request, res: Response) => {
  const postId = req.params.id;

  const requestedPost = posts.find((post) => post._id === postId);

  if (requestedPost) {
    // if post is found
    res.status(200).json({ message: 'Post found', post: requestedPost });
  } else {
    // if post is not found
    res.status(404).json({ message: 'Post not found' });
  }
};
