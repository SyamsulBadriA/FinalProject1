const db = require("../config/db");
const { generateToken } = require('../helpers/jwt');

class UserController {
    static async register(req, res) {
        const { email, password } = req.body;
        try {
            let createUser = await db.query(
                `INSERT INTO users (email, password) VALUES ($1, $2)`,
                [email, password]
            );

            return res.status(201).json({message: `New Email ${email} has been created`});
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    static async login(req, res) {
        const { email,password } = req.body;
        try {
            const findEmail = await db.query(
                `SELECT * FROM users where email=$1`, [email]
            );
            if (findEmail.rowCount) {
                const payload = {
                    id: findEmail.rows[0].id,
                    email: findEmail.rows[0].email
                }
                if(password === findEmail.rows[0].password) {
                    const token = generateToken(payload);
                    res.status(200).json({token});
                } else {
                    res.status(400).json({message: "Invalid Password"});
                }
            } else {
                res.status(404).json({message: `User with email ${email} not found`});
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = UserController;