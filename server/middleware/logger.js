const logger = (req, res, next) => {
    const start = Date.now();

    // Once the request is finished
    res.on('finish', () => {
        const duration = Date.now() - start;
        const status = res.statusCode;
        const method = req.method;
        const url = req.originalUrl;

        let statusColor = status >= 400 ? '❌' : (status >= 300 ? '🟡' : '✅');

        console.log(`${statusColor} ${method} ${url} - ${status} (${duration}ms)`);
    });

    next();
};

export default logger;
