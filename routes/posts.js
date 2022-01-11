import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.js';
const router = express.Router();
//route /posts
router.get('/posts',getPosts);
//create posts   insert
router.post('/posts',createPost);
//get 1 post
router.get('/posts/:id',getPost);
//delete 1 post
router.delete('/posts/:id',deletePost);
//update part from object--not all object
router.patch('/posts/:id',updatePost);
export default router;
 