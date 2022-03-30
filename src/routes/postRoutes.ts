import { Router } from 'express';
import { getPosts, getPost } from '../controllers/postController';

const router = Router();

// GET /posts
router.get('/posts', getPosts);

// GET /post/:id
router.get('/post/:id', getPost);

export default router;
