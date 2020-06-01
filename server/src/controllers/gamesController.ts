import { Request, Response } from 'express'
import pool from '../database'

class GamesController{

    public async list(req: Request, res: Response):Promise<void>{
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games Where id = ?', [id]);
        if(games.length>0){
            return res.json(games[0]);
        }
        res.status(404).json({message: "The game doesn't exist"});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message:'Game saved'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const games = await pool.query('UPDATE games set ? Where id = ?', [req.body, id]);
        res.json({message: "The game " + [id] + " was updated"});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        const { id } = req.params;
        const games = await pool.query('DELETE FROM games Where id = ?', [id]);
        res.json({message: "The game " + [id] + " was deleted"});
    }
}

const gamesController = new GamesController();
export default gamesController;