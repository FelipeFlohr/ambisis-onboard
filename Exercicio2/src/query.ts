import { dao } from "./index";

export const query = async () => await dao.select({
    from: "vistoria",
    join: {
        table: "vistoriafoto",
        on: { __col_relation: { "vistoriaId": "id" } },
        type: "left",
        columns: { imagemId: "id", imagemDescricao: "descricao" }
    },
}, {
    groupData: {
        by: "id",
        columnGroups: {
            fotos: {
                id: "imagemId",
                descricao: "imagemDescricao"
            }
        }
    }
})