//centralized error handling

const errorHandling = (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({
        status: 500,
        messsage: 'something went wrong',
        error: err.messsage
    })
}

export default errorHandling