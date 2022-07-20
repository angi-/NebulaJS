"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    success(res, output) {
        res.status(200).json({
            message: output
        });
    }
    unauthorized(res, output) {
        res.status(401).json({
            message: output
        });
    }
    forbidden(res, output) {
        res.status(403).json({
            message: output
        });
    }
    conflict(res, output) {
        res.status(409).json({
            message: output
        });
    }
    notFound(res) {
        res.status(404).json({
            message: 'Not Found'
        });
    }
    validationError(res, output) {
        res.status(422).json({
            message: output
        });
    }
    serverError(res, exception) {
        console.error(exception);
        res.status(500).json({
            message: exception.message
        });
    }
}
exports.default = ApiResponse;
