"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor(context) {
        this.context = context;
    }
    success(res, output) {
        res.status(200).json({
            message: output || ''
        });
    }
    unauthorized(res, output) {
        res.status(401).json({
            message: output || 'You are not authorized'
        });
    }
    forbidden(res, output) {
        res.status(403).json({
            message: output || 'You do not have access to this resource'
        });
    }
    conflict(res, output) {
        res.status(409).json({
            message: output || 'Could not process this request'
        });
    }
    notFound(res, output) {
        res.status(404).json({
            message: output || 'This resource does not exist'
        });
    }
    validationError(res, output) {
        res.status(422).json({
            message: output
        });
    }
    serverError(res, message) {
        this.context.logger.error(message);
        if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
            message = 'A problem was detected while processing the request, please try again later';
        }
        res.status(500).json({
            message: message
        });
    }
    byException(res, exception) {
        if (exception.name === 'NotFoundException') {
            return this.notFound(res, exception.message);
        }
        if (exception.name === 'AlreadyExistsException') {
            return this.conflict(res, exception.message);
        }
        this.serverError(res, exception.message);
    }
}
exports.default = ApiResponse;
