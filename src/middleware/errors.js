export class NotFoundError extends Error{
     constructor(message) {
        super(message)
        this.name = "NotFoundError"
        this.status = 404
        this.stack = ""
    }
}
export class AuthenticationError extends Error{
     constructor(message) {
        super(message)
        this.name = "AuthenticationError"
        this.status = 401
        this.stack = ""
    }
}
export class ProductExistsError extends Error{
     constructor(message) {
        super(message)
        this.name = "ProductExistsError"
        this.status = 409
        this.stack = ""
    }
}
export class AuthValidationError extends Error{
     constructor(message, status) {
        super(message)
        this.name = "AuthValidationError"
        this.status = status
        this.stack = ""
    }
}
export class JsonWebTokenErrors extends Error{
     constructor(message) {
        super(message)
        this.name = "JsonWebTokenErrors"
        this.status = 401
        this.stack = ""
    }
}