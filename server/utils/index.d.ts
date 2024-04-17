/// <reference types="cookie-parser" />
import { Request, Response, NextFunction } from "express";
export declare function UserDisplayName(req: Request): string;
export declare function AuthGuard(req: Request, res: Response, next: NextFunction): void;
