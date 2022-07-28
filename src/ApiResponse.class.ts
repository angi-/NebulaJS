import { Response } from "express";
import { INeutronCoreContext } from "./NeutronCore.class";

export default class ApiResponse {
    private context: INeutronCoreContext;

    constructor(context: INeutronCoreContext) {
        this.context = context;
    }

    success (res: Response, output: any) {
        res.status(200).json({
            message: output || ''
        });
    }

    unauthorized(res: Response, output?: any) {
        res.status(401).json({
            message: output || 'You are not authorized'
        });
    }

    forbidden(res: Response, output?: any) {
        res.status(403).json({
            message: output || 'You do not have access to this resource'
        });
    }

    conflict(res: Response, output?: any) {
        res.status(409).json({
            message: output || 'Could not process this request'
        });
    }

    notFound(res: Response, output?: any) {
        res.status(404).json({
            message: output || 'This resource does not exist'
        });
    }

    validationError(res: Response, output: any) {
        res.status(422).json({
            message: output
        });
    }

    serverError(res: Response, message: any) {
        this.context.logger.error(message);

        if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
            message = 'A problem was detected while processing the request, please try again later';
        }

        res.status(500).json({
            message: message
        });
    }

    byException(res: Response, exception: Error) {
        if (exception.name === 'NotFoundException') {
            return this.notFound(res, exception.message);
        }

        if (exception.name === 'AlreadyExistsException') {
            return this.conflict(res, exception.message);
        }

        this.serverError(res, exception.message);
    }
}
