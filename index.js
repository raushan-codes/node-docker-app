import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'short message from the server. runner is great'
    });
});

app.listen(8888, ()=>{
    console.log('server running at http://localhost:8888');
});

