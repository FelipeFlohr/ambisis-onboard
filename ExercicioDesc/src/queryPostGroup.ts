import { DataAccessObject, QueryBuilder } from "mysql-all-in-one"

const dao = new DataAccessObject({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "ambisistest"
})

export const main = async () => await dao.select({
    from: "licenca",
    join: {
        table: { clientecontatoultimo: {} },
        on: { __col_relation: { 'licencaId': 'id' } },
        type: 'left',
        columns: { condicionanteId: 'id', condicionanteNome: 'nome', condicionanteDescricao: 'descricao' }
    }
}, {
    groupData: {
        by: 'id',
        columnGroups: {
            condicionantes: {
                id: 'condicionanteId',
                nome: 'condicionanteNome',
                descricao: 'condicionanteDescricao',
            }
        }
    }
})