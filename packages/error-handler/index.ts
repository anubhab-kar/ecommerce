export class AppError extends Error{
    public readonly isOperational: boolean;
    public readonly statusCode: number;
    public readonly details?: any;
    constructor(message: string, statusCode: number, isOperational: boolean = true, details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        Error.captureStackTrace(this);
    }
}
//NotFoundError
export class NotFoundError extends AppError {
    constructor(message: string = 'Resource not found', details?: any) {

        super(message, 404, details);
    }
}
//ValidationError
export class ValidationError extends AppError {
    constructor(message: string = 'Validation error', details?: any) {
        super(message, 400, details);
    }
}
// AuthError
export class AuthError extends AppError {
    constructor(message: string = 'Unauthorized', details?: any) {
        super(message, 401, details);
    }
}
//ForbiddenError
export class ForbiddenError extends AppError {
    constructor(message: string = 'Forbidden', details?: any) {
        super(message, 403, details);
    }
}
//DatabaseError
export class DatabaseError extends AppError {
    constructor(message: string = 'Database error', details?: any) {
        super(message, 500, details);
    }
}
//rate limit error
export class RateLimitError extends AppError {
    constructor(message: string = 'Too many requests, please try again later.', details?: any) {
        super(message, 429, details);
    }
}