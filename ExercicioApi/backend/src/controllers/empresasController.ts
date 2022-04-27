import { NextFunction, Request, Response } from "express";
import { getEmpresasServ } from "../services/empresasServ";

export function getEmpresas(req: Request, res: Response, next: NextFunction) {
    getEmpresasServ()
        .then(data => {
            res.json(data)
            next()
        })
        .catch(next)
}