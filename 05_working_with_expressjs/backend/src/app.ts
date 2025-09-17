import bodyParser from "body-parser";
import express from "express";
import { router as adminRoutes } from "./routes/admin";
import shopRoutes from "./routes/shop";
import cors from "cors";

const app = express();


app.use(cors());  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});



