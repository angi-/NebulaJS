import { Response } from "express";
import { INeutronCoreContext } from "./NeutronCore.class";
export default class ApiResponse {
    private context;
    constructor(context: INeutronCoreContext);
    success(res: Response, output: any): void;
    unauthorized(res: Response, output?: any): void;
    forbidden(res: Response, output?: any): void;
    conflict(res: Response, output?: any): void;
    notFound(res: Response, output?: any): void;
    validationError(res: Response, output: any): void;
    serverError(res: Response, exception?: any): void;
}
