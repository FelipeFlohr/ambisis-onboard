import express from "express";
import { envProvider } from "./providers/envProvider";
import routes from "./routes/routes";
import cors from "cors"

const app = express()
app.use(cors())

app.listen(envProvider.serverPort, () => {
    console.log(`Application up and running at http://localhost:${envProvider.serverPort}`)
})

routes(app)