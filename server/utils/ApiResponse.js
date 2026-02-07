class ApiResponse {
    constructor(statusCode, data, messageSnapshot = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = messageSnapshot;
        this.success = statusCode < 400;
    }

    static success(res, data, message = "Success", statusCode = 200) {
        return res.status(statusCode).json(new ApiResponse(statusCode, data, message));
    }

    static error(res, message = "Error", statusCode = 500, error = null) {
        return res.status(statusCode).json({
            success: false,
            message,
            statusCode,
            error: process.env.NODE_ENV === 'development' ? error : undefined
        });
    }
}

export default ApiResponse;
