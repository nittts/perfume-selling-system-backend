import app from "./app";
import { checkConnection } from "./database/planetScale.mysql";

const port = process.env.PORT || 8888;
const host = process.env.HOST || "localhost";

checkConnection();

app.listen(port, () => {
  console.log(`Server running on 
  http://${host}:${port}!`);
});
