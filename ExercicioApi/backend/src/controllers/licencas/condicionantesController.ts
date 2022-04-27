import { NextFunction, Request, Response } from "express";
import { getCondicionantesServ } from "../../services/licencas/condicionantesServ";

export function getCondicionantes(req: Request, res: Response, next: NextFunction) {
    getCondicionantesServ()
        .then(data => {
            res.json(data)
            next()
        })
        .catch(next)
}