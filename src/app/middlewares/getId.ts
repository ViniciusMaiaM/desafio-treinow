import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const authConfig = require('../../config/auth.json');

export interface DecodedToken{
    id: string;
}

export function getUserIdFromToken(req: Request): string | null {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return null;
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token, authConfig.secret) as DecodedToken;
        return decoded.id;
    } catch (err) {
        return null;
    }
}
