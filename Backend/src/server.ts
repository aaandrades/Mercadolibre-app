import "module-alias/register";
import { PORT } from "./app/config/environment";

async function main() {
  const app = (await import("./app/config/app")).default;
  app.listen(PORT, () => console.log("Server running on port: " + PORT));
}

main()
  .then((r) => r)
  .catch((e) => console.log(e));
