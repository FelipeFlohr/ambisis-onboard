import { DataAccessObject } from "mysql-all-in-one"
import { envProvider } from "./envProvider"

export const daoProvider = new DataAccessObject({
    host: "localhost",
    user: envProvider.dbUsername,
    password: envProvider.dbPassword,
    port: 3306,
    database: envProvider.dbName
})