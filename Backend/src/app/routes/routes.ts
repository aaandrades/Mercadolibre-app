import { Request, Response, Router } from "express";
import { mercadoLibreService } from "../service/mercadoLibreService";

// Export all routes availables in app
export const routerLink = (router: Router) => {
  router.get("/", (req: Request, res: Response) => {
    res.json("Welcome to the API of MercadolibreApp.");
  });

  router.get("/api/items", async (req: Request, res: Response) => {
    const queryParam = req.query.q || "";
    const response = await mercadoLibreService(queryParam, true);

    return response?.status
      ? res.status(response.status).json({
          state: "false",
          query: queryParam,
          response: response.message,
        })
      : res.json({ state: "true", query: queryParam, response });
  });

  router.get("/api/items/:id", async (req: Request, res: Response) => {
    const id = req.params.id || "";
    const response = await mercadoLibreService(id, false);
    return response?.status
      ? res.status(response.status).json({
          state: "false",
          query: id,
          response: response.message,
        })
      : res.json({ state: "ok", query: id, response });
  });

  router.get("*", function (req, res) {
    res.redirect("/");
  });
};
