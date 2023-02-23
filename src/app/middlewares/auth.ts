import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const authConfig = require('../../config/auth.json');

module.exports = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({error: "No token provided"});
    }

    const parts = authHeader.split(' ');

    //Verificação se o token está de acordo com o esperado, exemplo: Bearer vvsajnajnjanjnfjsnfj
    if(parts.length === 2){
        const [scheme, token] = parts;

        if(!/^Bearer$/i.test(scheme)){
            return res.status(401).send({error:'Token malformatted'});
        }

        jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
            if(err){
                return res.status(401).send({error:"Token invalid"});
            }

            req.userId = decoded.id;
            return next();
        })
    }
    else{
        return res.status(401).send({error: "Token error"});
    }
}
