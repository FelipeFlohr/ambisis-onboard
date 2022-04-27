import { Express } from "express"
import { getEmpresas } from "../controllers/empresasController"
import { getCondicionantes } from "../controllers/licencas/condicionantesController"
import { getCondicionantesQnt } from "../controllers/licencas/condicionantesQntController"
import { getVencimentos } from "../controllers/licencas/vencimentosController"
import { getLicencas } from "../controllers/licencasController"

export default async function routes(app: Express) {
    app.route("/licencas")
        .get(getLicencas)

    app.route("/licencas/condicionantesqnt")
        .get(getCondicionantesQnt)

    app.route("/licencas/condicionantes")
        .get(getCondicionantes)

    app.route("/licencas/vencimentos")
        .get(getVencimentos)

    app.route("/empresas")
        .get(getEmpresas)
}