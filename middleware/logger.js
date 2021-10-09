// @desc    Logs requests to BE console
const logger = (req, res, next) => {
   console.log(`Middleware enabled for method ${req.method} on ${req.protocol}://${req.get('host')}${req.originalUrl}`);
   next();
};

module.exports = logger;
