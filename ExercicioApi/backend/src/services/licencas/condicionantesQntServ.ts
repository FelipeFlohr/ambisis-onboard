import { daoProvider } from "../../providers/daoProvider";

export function getCondicionantesQntServ() {
    return daoProvider.select({
        columns: ["id", "numero"],
        from: "licenca",
        join: {
            table: "condicionante co",
            columns: [{ __expression: { "quantidade_condicionantes": "COUNT(co.licencaId)" } }],
            on: {
                __col_relation: { "licencaId": "id" }
            },
            type: "left",
        },
        group: "id"
    })
}