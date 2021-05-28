import { Request, Response, NextFunction } from 'express';

export default function({ cookies }: Request, res: Response, next: NextFunction) {
    if (cookies.call_request) return res.sendStatus(403);

    next();
}
