import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'short message from the server. used svc.sh to keep the runner in the background.'
    });
});

app.listen(8888, ()=>{
    console.log('server running at http://localhost:8888');
});

