import { DataAccessObject } from "mysql-all-in-one"
import { envVars } from "./envProvider"

export const daoProvider = new DataAccessObject({
    host: "localhost",
    user: envVars.dbUsername,
    password: envVars.dbPassword,
    port: 3306,
    database: envVars.dbName
})