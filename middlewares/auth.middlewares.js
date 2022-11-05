const jsonwebtoken = require('jsonwebtoken');

const authBearerMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");

    try {
        if (strategy.toLowerCase() !== 'bearer') {
            throw new Error('Invalid strategy');
        }
        jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    } catch(error) {
        res.status(401).json({ message: "You are not authenticated" });
        return
    }

    next();
};

module.exports = authBearerMiddleware;
