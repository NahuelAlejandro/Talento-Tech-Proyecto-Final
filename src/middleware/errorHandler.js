export const errorHandler = (err, req, res, next)=>{
    const statusCode = err.status || 500

    res.status(statusCode).json({
        status: statusCode,
        name: err.name,
        message: err.message || "server error"
    })

}