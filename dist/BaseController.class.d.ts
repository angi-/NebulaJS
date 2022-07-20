import { NextFunction, Request, Response } from "express";
import ApiResponse from "./ApiResponse.class";
export default class BaseController {
    protected apiResponse: ApiResponse;
    constructor();
    get(req: Request, res: Response, next: NextFunction): Promise<any>;
    put(req: Request, res: Response, next: NextFunction): Promise<any>;
    post(req: Request, res: Response, next: NextFunction): Promise<any>;
    delete(req: Request, res: Response, next: NextFunction): Promise<any>;
}
