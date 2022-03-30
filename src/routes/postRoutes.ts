import { Router } from 'express';
import { getPosts } from '../controllers/postController';

const router = Router();

// GET /posts
router.get('/posts', getPosts);

export default router;
