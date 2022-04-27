import dotenv from "dotenv"
const config = dotenv.config()

export const envProvider = {
    dbUsername: process.env.DB_USERNAME as string,
    dbPassword: process.env.DB_PASSWORD as string,
    dbName: process.env.DB_NAME as string,
    serverPort: process.env.SERVER_PORT as string
}