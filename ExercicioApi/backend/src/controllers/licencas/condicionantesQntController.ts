import { NextFunction, Request, Response } from "express"
import { getCondicionantesQntServ } from "../../services/licencas/condicionantesQntServ"

export function getCondicionantesQnt(req: Request, res: Response, next: NextFunction) {
    getCondicionantesQntServ()
        .then(data => {
            res.json(data)
            next()
        })
        .catch(next)
}