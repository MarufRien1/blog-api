/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import { Post } from './models/post';

// temporary data base for posts
const posts: Post[] = [
  {
    _id: '1',
    title: 'First Post',
    content: 'This is the first post',
    imageUrl: 'url',
    creator: 'Maruf',
  },
];

export default posts;
