import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const requestValidator = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {   
          return res.status(404).json({ errors: errors.array() });  
        } 
    next();
 };