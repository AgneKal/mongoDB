import express from 'express';
import { PostsController } from '../controllers/posts.controller';


const postsRouter=express.Router();

postsRouter.get('/', PostsController.getAll);
postsRouter.get('/:id', PostsController.get);
postsRouter.post('/', PostsController.store);
postsRouter.put('/:id', PostsController.update);
postsRouter.delete('/:id',PostsController.delete);

postsRouter.post('/:id/addComment', PostsController.addComment);


export {postsRouter};