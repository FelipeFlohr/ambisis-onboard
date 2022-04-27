import express from "express";
import routes from "./routes/routes";

const app = express()
app.listen(3000, () => {
    console.log("Application up and running at http://localhost:3000")
})

app.get("/teste", (req, res) => {})

routes(app)