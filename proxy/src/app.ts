import express, {Express, Request, Response} from "express";
import axios from "axios";
import dotenv from "dotenv";
import {LoggedUserMiddleware} from "../middleware/LoggedUserMiddleware";
const cors = require('cors')
const app: Express = express();
app.use(express.json());
dotenv.config();
app.use(cors())
app.use(LoggedUserMiddleware);

const port: string | number = process.env.PORT || 8000;
// parse application/json

require('../services/User')(app);

app.get("/api", (_: Request, res: Response) => {
  res.send("Hello API");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
