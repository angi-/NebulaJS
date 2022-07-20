import { Response } from "express";

export default class ApiResponse {
    success (res: Response, output: any) {
        res.status(200).json({
            message: output
        });
    }

    unauthorized(res: Response, output: any) {
        res.status(401).json({
            message: output
        });
    }

    forbidden(res: Response, output: any) {
        res.status(403).json({
            message: output
        });
    }

    conflict(res: Response, output: any) {
        res.status(409).json({
            message: output
        });
    }

    notFound(res: Response) {
        res.status(404).json({
            message: 'Not Found'
        });
    }

    validationError(res: Response, output: any) {
        res.status(422).json({
            message: output
        });
    }

    serverError(res: Response, exception: any) {
        console.error(exception);
        res.status(500).json({
            message: exception.message
        });
    }
}
