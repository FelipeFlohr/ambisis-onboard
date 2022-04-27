import { NextFunction, Request, Response } from "express";
import { getVencimentosServ } from "../../services/licencas/vencimentosServ";

export function getVencimentos(req: Request, res: Response, next: NextFunction) {
    getVencimentosServ()
        .then(data => {
            res.json(data)
            next()
        })
        .catch(next)
}