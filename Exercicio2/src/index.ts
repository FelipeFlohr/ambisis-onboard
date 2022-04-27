import { DataAccessObject, QueryBuilder } from "mysql-all-in-one";
import { SqlValues } from "mysql-all-in-one/QueryBuilder/types";
import { query } from "./query";

export const dao = new DataAccessObject({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "ambisistest"
})

async function main() {
    const q = await query() as SqlValues[]
    console.log(q)
    process.exit(0)
}

main()