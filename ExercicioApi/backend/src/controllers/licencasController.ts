import { NextFunction, Request, Response } from "express"
import { getLicencasServ } from "../services/licencasServ"

export function getLicencas(req: Request, res: Response, next: NextFunction) {
    getLicencasServ()
        .then(data => {
            res.json(data)
            next()
        })
        .catch(next)
}