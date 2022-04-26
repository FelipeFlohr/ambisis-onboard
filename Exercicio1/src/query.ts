import { dao } from "./index";

export const query = async () => await dao.select({
    from: "licenca",
    join: {
        table: "condicionante",
        on: { __col_relation: { "licencaId": "id" } },
        type: "left",
        columns: { condicionanteId: "id", condicionanteNome: "nome" }
    }
}, {
    groupData: {
        by: "id",
        columnGroups: {
            condicionantes: {
                id: "condicionanteId",
                nome: "condicionanteNome",
                descricao: "condicionanteDescricao"
            }
        }
    }
})