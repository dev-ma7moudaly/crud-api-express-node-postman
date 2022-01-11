import { v4 as uuidv4 } from 'uuid';
let posts = [];

export const getPosts = (req,res)=>{
    res.send(posts);
}
export const createPost = (req,res)=>{
    posts.push({...req.body,id: uuidv4()});
     res.send(posts);
}
export const getPost =(req,res)=>{
    let id = req.params.id;
    let post = posts.find(post=> post.id == id);
    res.send(post);
}
export const deletePost=(req,res)=>{
    let {id} = req.params;
    posts = posts.filter(post=> post.id != id);
    res.send(posts);
}
export const updatePost=(req,res)=>{
    let {title,desc} = req.body;
    let {id} = req.params;
    let post = posts.find(post=> post.id == id);
    if(title){
        post.title= title;
    }
    if(desc){
        post.desc = desc;
    }
    res.send(post);
}
