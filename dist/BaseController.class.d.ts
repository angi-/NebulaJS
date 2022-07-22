import { NextFunction, Request, Response } from "express";
import ApiResponse from "./ApiResponse.class";
import { INeutronCoreContext } from "./NeutronCore.class";
export default class BaseController {
    protected apiResponse: ApiResponse;
    constructor(context: INeutronCoreContext);
    get(req: Request, res: Response, next: NextFunction): Promise<any>;
    put(req: Request, res: Response, next: NextFunction): Promise<any>;
    post(req: Request, res: Response, next: NextFunction): Promise<any>;
    delete(req: Request, res: Response, next: NextFunction): Promise<any>;
}
