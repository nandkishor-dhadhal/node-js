import bodyParser from "body-parser";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import path from "path";

const app = express();

import { router as adminRoutes } from "./routes/admin";
import shopRoutes from "./routes/shop";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, ".", "views", "page-not-found.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
