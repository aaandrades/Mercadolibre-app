import "module-alias/register";
import { PORT } from "./app/config/environment";

async function main() {
  const app = (await import("./app/config/app")).default;
  const port = PORT || 8080;
  app.listen(port, () => console.log("Server running on port: " + port));
}

main()
  .then((r) => r)
  .catch((e) => console.log(e));
