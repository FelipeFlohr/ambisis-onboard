import { dao } from "./index"

export const query1 = async () => await dao.select({
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