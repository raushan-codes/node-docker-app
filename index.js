import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'welcome to the server'
    });
});

app.listen(8888, ()=>{
    console.log('server running at http://localhost:8888');
});

