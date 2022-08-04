import { Request, Response } from "express";
import { pool } from "../dbconfig";
import { QueryResult } from "pg";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM users ORDER BY id ASC');
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, contact } = req.body;
    let querystring = `INSERT INTO users (name, email, contact)
                        VALUES ($1,$2,$3)`;
    const response = await pool.query(querystring, [name, email, contact])
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name, email, contact }
        }
    })
}

export const getUserById =async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    let querystring = `SELECT * FROM users WHERE id = $1`;
    const response: QueryResult = await pool.query(querystring,[id]);
    return res.json(response.rows);
}

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, email, contact } = req.body;
    let querystring = `UPDATE users 
                        SET name = $1, 
                        email = $2, 
                        contact = $3 
                        WHERE id = $3`;
    const response = await pool.query(querystring,[name,email,contact]);
    res.json('Update Successful!');
}

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let querystring = `DELETE FROM users WHERE id = $id`;
    await pool.query(querystring,[id]);
    res.json(`User ${id} deleted Successfully`);
}