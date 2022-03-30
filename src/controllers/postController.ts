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

// add a new post
export const addPost = (req: Request, res: Response) => {
  //creating a random id
  const _id = Math.random().toString();

  // extracting values form request
  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = req.body.imageUrl;
  const creator = req.body.creator;

  // validation
  if (!title || !content || !imageUrl || !creator) {
    return res.status(400).json({ message: 'Please provide all fields' });
  } else {
    // for valid post
    const newPost = { _id, title, content, imageUrl, creator };
    posts.push(newPost);
    res.status(201).json({ message: 'Post created', post: newPost });
  }
};
