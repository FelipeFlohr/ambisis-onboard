import { dao } from "./index";

export const query = async () => await dao.select({
    from: "vistoria",
    join: {
        table: "vistoriafoto",
        on: { __col_relation: { "vistoriaId": "id" } },
        type: "left",
    }
})