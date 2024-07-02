import { Post } from "../models/post";

export class PostsController{
    static async getAll(req:any, res:any){
        const posts=await Post.find();
        console.log(posts);
        res.json(posts);
    }

    static async get(req:any, res:any){
        //const post = await Post.findOne({'_id':req.params.id});
        const post = await Post.findById(req.params.id);
        res.json(post);
    }

    static async store(req:any, res:any){
        const newPost=new Post({
            title:req.body.title,
            content:req.body.content,
            author:{
                name:req.body.author_name,
                email:req.body.author_email

            }
        });
        
        await newPost.save();
        res.json(newPost);
    }

    static async update(req:any, res:any){
        const post=await Post.findOne({'_id':req.params.id});

        if (post!=null){
            if (req.body.title!=null)
                post.title=req.body.title;
            if (req.body.content!=null)
                post.content=req.body.content;
            if (req.body.author_name!=null)
                    post.author.name=req.body.author_name;
            if (req.body.author_email!=null)
                post.author.email=req.body.author_email;
            post.save();
        }
        res.json(post);

    }

    static async delete(req:any, res:any){
        const post=await Post.findOneAndDelete({
            '_id': req.params.id
        });
        res.json(post);
    }

    static async addComment(req:any, res:any){
        const post=await Post.findById(req.params.id);
        if (post!=null){
            post.comments.push({
                text:req.body.text,
                full_name:req.body.full_name
            });
            post.save();
        }
        res.json(post);
    }
}