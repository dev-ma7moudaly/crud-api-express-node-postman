import express from 'express';
import bodyParser from 'body-parser';
import postsRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json());

//route /
app.get('/',(req,res)=>{
    res.send("Hello Node");
 });

app.use('/',postsRoutes);

//run server
app.listen('5000',()=>{
    console.log("server Running!!");
});

