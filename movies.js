import express from 'express';
import { connectDB } from './lib/db.js';
import movieroutes from './routes/routes.js';
const app = express()
const port =6968;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectDB();

app.get('/',
    (req,res)=>{
        res.json({msg:"hi from node"});
    }
);
app.use("/movies",movieroutes);
app.listen (port,()=>{
 
    console.log(`my node is running on ${port} `);
})