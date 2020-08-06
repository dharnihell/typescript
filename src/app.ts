    const http = require('http');
    const express = require("express");
    
    const app = express();

    const add = (x: number, y: number): number => x + y;

    app.get('/4/6', (req: any, res: any) => {
        console.log(add(4, 6));
        res.send('hello');
    });

    export { app };


