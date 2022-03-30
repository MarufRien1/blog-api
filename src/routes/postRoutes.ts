import { Router } from 'express';
import {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} from '../controllers/postController';

const router = Router();

// GET /posts
router.get('/posts', getPosts);

// GET /post/:id
router.get('/post/:id', getPost);

// POST /post
router.post('/post', addPost);

// PUT /post/:id
router.put('/post/:id', updatePost);

// DELETE /post/:id
router.delete('/post/:id', deletePost);

export default router;
