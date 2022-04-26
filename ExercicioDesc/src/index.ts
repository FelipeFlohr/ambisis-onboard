import { DataAccessObject } from "mysql-all-in-one"
import { query1 } from "./query1"
import { query2 } from "./query2"
import { query3 } from "./query3"

export const dao = new DataAccessObject({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "ambisistest"
})

async function main() {
    const q1 = await query1()
    const q2 = await query2()
    const q3 = await query3()

    console.log("---Query #1---")
    console.log(q1)
    console.log("---Query #2---")
    console.log(q2)
    console.log("---Query #3---")
    console.log(q3)
}

main()