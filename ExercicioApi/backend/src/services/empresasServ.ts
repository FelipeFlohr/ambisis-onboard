import { daoProvider } from "../providers/daoProvider";

export function getEmpresasServ() {
    return daoProvider.select({
        columns: [
            { numero: "id" },
            { __expression: { "empresa": `concat_ws(" ", razaoSocial, cnpj)` } },
            { contato: "representanteLegal" },
            { email: "emailrepresentantelegal" },
            { telefone: "cc.telefone" },
            { __expression: {responsavel: `group_concat(au.nome separator ", ")`} }
        ],
        from: "cliente c",
        join: [
            {
                table: "clientecontato cc",
                on: { __col_relation: { "clienteId": "id" } },
                type: "left"
            },
            {
                table: "responsavel re",
                on: {
                    module: "cliente",
                    __col_relation: { "moduleId": "id" },
                },
                type: "left"
            },
            {
                table: "auth_usuario au",
                on: {
                    __col_relation: { "id": "re.responsavelId" }
                },
                type: "left"
            }
        ],
        group: "id"
    })
}