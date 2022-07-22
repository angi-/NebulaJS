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
    serverError(res, exception) {
        this.context.logger.error(exception);
        let message = exception === null || exception === void 0 ? void 0 : exception.message;
        if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
            message = 'A problem was detected while processing the request, please try again later';
        }
        res.status(500).json({
            message: message
        });
    }
}
exports.default = ApiResponse;
