const db = require('../config/db');
const { verifyToken } = require('../helpers/jwt');

async function authentication(req, res, next) {
    try {
        const token = req.headers['x-access-token'];
        const decoded = verifyToken(token);
        const findUser = await db.query(
            `SELECT * FROM users WHERE id=$1 AND email=$2`,
            [decoded.id, decoded.email]
        );
        if(findUser) {
            res.locals.userId = findUser.rows[0].id;
            return next();
        } else {
            return res.status(401).json({name:"authentication Error", message: `User with Email ${decoded.email} not found`})
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = authentication;