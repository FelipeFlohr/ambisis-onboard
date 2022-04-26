import { DataAccessObject } from "mysql-all-in-one";
import { query } from "./query";

export const dao = new DataAccessObject({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "ambisistest"
})

async function main() {
    const q = await query()
    console.log(q)
}

main()