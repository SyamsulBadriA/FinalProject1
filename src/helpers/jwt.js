const jwt = require('jsonwebtoken');
const SECRET_KEY = "classified";

function generateToken(payload) {
    return token = jwt.sign(payload, SECRET_KEY);
}

function verifyToken(token) {
    return decoded = jwt.verify(token, SECRET_KEY);
}

module.exports = {
    generateToken,
    verifyToken
}