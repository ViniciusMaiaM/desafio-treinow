const jwt = require("jsonwebtoken");
const authConfig = require('./auth');

export function generateToken(params = {}){
    return jwt.sign(
        params,
        authConfig.secret,
        {expiresIn:86400,}
    );
}
