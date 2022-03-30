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
  {
    _id: '2',
    title: '2nd Post',
    content: 'This is the 2nd post',
    imageUrl: 'url',
    creator: 'Maruf',
  },
];

export default posts;
