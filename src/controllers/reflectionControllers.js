const db = require('../config/db');

class ReflectionController {
    static async createReflection(req, res) {
        try {
            const {
                success,
                low_point,
                take_away,
            } = req.body;
            const created_date = new Date();
            const modified_date = new Date();
            const owner_id = res.locals.userId;
    
            const createRef = await db.query(
                `INSERT INTO reflections (success, low_point, take_away, created_date, modified_date, owner_id) 
                VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
                [success, low_point, take_away, created_date, modified_date, owner_id]
            );
            const response = {
                id: createRef.rows[0].id,
                success: success,
                low_point: low_point,
                take_away: take_away,
                owner_id: owner_id,
                created_date: created_date,
                modified_date: modified_date,
            }
            res.status(200).json(response);
        } catch(err) {
            res.status(500).json(err);
        };
    };

    static async getReflection(req, res) {
        try {
            const ownerId = res.locals.userId;
            const getRef = await db.query(
                `SELECT reflections.id, reflections.success, reflections.low_point, reflections.take_away,
                reflections.owner_id, reflections.created_date, reflections.modified_date, users.email FROM reflections
                RIGHT OUTER JOIN users ON reflections.owner_id=users.id
                WHERE owner_id=${ownerId}`
            )
            res.status(200).json(getRef.rows);
        } catch(err) {
            res.status(500).json(err);
        }
    };

    static async updateReflection(req, res) {
        try {
            const idRef = req.params.id;
            const { success, low_point, take_away } = req.body;
            const modified_date = new Date();

            const findRefById = await db.query(
                `SELECT * FROM reflections WHERE id=${idRef}`
            );
            if(findRefById.rowCount) {
                if(findRefById.rows[0].owner_id === res.locals.userId) {
                    const updateRef = await db.query(
                        `UPDATE reflections
                        SET success = '${success}', low_point = '${low_point}', take_away = '${take_away}', modified_date = $1
                        WHERE id = ${idRef} RETURNING *`, [modified_date]
                    );
                    res.status(200).json(updateRef.rows[0]);
                } else {
                    res.status(401).json({name: "Unauthorized", message: `You dont have permission to edit Reflection with id ${idRef}`});
                }
            } else {
                res.status(400).json({name: "Reflection Not Found", message: `Reflection with id ${idRef} not found in database`})
            }
        } catch(err) {
            res.status(500).json(err);
        }
    };

    static async deleteReflection(req, res) {
        try {
            const idRef = req.params.id;

            const findRefById = await db.query(
                `SELECT * FROM reflections WHERE id=${idRef}`
            );
            if(findRefById.rowCount) {
                if(findRefById.rows[0].owner_id === res.locals.userId) {
                    const deleteRef = await db.query(
                        `DELETE FROM reflections
                        WHERE id=$1 RETURNING *`,
                        [idRef]
                    );
                    res.status(200).json(deleteRef.rows[0]);
                } else {
                    res.status(401).json({name: "Unauthorized", message: `You dont have permission to Delete Reflection with id ${idRef}`});
                }
            } else {
                res.status(400).json({name: "Reflection Not Found", message: `Reflection with id ${idRef} not found in database`})
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = ReflectionController;