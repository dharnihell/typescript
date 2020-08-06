
    const express = require("express");
    const { Application, Request, Response, NextFunction } = require("express");
    
    const app = express();

    const add = (x: number, y: number): number => x + y;

    app.get('/x/y', (x: number, y:number, res: Response, req: Request) => {
        console.log(add(x, y));        
        }

    );



    export { app };


