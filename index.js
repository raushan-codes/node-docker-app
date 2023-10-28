import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'this response is from the EC2 server running a docker image (container)'
    });
});

app.listen(8888, ()=>{
    console.log('server running at http://localhost:8888');
});

