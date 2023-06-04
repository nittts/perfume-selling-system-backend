import app from "./app";
import { checkConnection } from "./database/planetScale.mysql";
import { runTestMongo } from "./database/atlas.mongo";

const port = process.env.PORT || 8888;
const host = process.env.HOST || "localhost";

checkConnection();
runTestMongo();

app.listen(port, () => {
  console.log(`Server running on 
  http://${host}:${port}!`);
});
