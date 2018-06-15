import { Router } from 'express';
import PostController from '../controllers/post.controller';
const router = new Router();

const data = [{ id: 0, title: 'test1', content: 'assdasdasdwf' }];
// get all posts
router.get('/posts', (req, res) => {
  PostController.getAll(req, res);
  // res.json(data);
});

// Get one post by cuid
router.get('/posts/:cuid', (req, res) =>{
	// PostController.getPost(req,res);
	res.send('hello :cuid');
});

// Add a new Post
router.post('/posts', (req, res) => {
  PostController.addPost(req, res);
});

// router.put('/posts/:cuid', (req, res) => {
//  PostController.updatePost(req, res);
// 	res.send('put hello');
// });

// // Delete a post by cuid
// router.delete('/posts/:cuid', (req, res) => {
//  PostController.deletePost(req, res);
// 	res.send('delete hello');
// });

export default router;