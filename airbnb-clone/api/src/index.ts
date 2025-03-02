import "dotenv/config";
import { expressApplication, mongoConnection } from "./config";
import { login, register } from "./controllers/LoginController";
import { profile } from "./controllers/UserController";

mongoConnection();
const app = expressApplication;

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", register);
app.post("/login", login);
app.get("/profile", profile);
