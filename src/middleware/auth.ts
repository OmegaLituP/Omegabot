import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Remove "Bearer " from token

        jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }

            // Attach the user object to the request for later use
            (req as any).user = user; 
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

export default authenticateJWT;