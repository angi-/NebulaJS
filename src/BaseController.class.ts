import { NextFunction, Request, Response } from "express";
import ApiResponse from "./ApiResponse.class";
import { INeutronCoreContext } from "./NeutronCore.class";

export default class BaseController {
    protected apiResponse: ApiResponse;

    constructor(context: INeutronCoreContext) {
        this.apiResponse = new ApiResponse(context);
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        this.apiResponse.notFound(res);
    }

    async put(req: Request, res: Response, next: NextFunction): Promise<any> {
        this.apiResponse.notFound(res);
    }

    async post(req: Request, res: Response, next: NextFunction): Promise<any> {
        this.apiResponse.notFound(res);
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
        this.apiResponse.notFound(res);
    }
}
