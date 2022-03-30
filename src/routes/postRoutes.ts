import { Router } from 'express';
import {
  getPosts,
  getPost,
  addPost,
  updatePost,
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
export default router;
