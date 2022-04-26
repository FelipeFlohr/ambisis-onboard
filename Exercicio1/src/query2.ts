import { dao } from "./index"
import { sqlExpression } from "mysql-all-in-one/QueryBuilder"

export const query2 = async () => await dao.select({
    columns: [{ __expression: { "vencimento": `STR_TO_DATE(validade, "%d /%m /%Y")` } }],
    from: "licenca",
    where: sqlExpression`DATE_FORMAT(STR_TO_DATE(validade, "%d/ %m/ %Y"), "%m-%y") = DATE_FORMAT(sysdate(), "%m-%y")`
})