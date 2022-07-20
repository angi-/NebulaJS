import { Response } from "express";
export default class ApiResponse {
    success(res: Response, output: any): void;
    unauthorized(res: Response, output: any): void;
    forbidden(res: Response, output: any): void;
    conflict(res: Response, output: any): void;
    notFound(res: Response): void;
    validationError(res: Response, output: any): void;
    serverError(res: Response, exception: any): void;
}
