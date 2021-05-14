"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerLink = void 0;
const mercadoLibreService_1 = require("../service/mercadoLibreService");
// Export all routes availables in app
const routerLink = (router) => {
    router.get("/", (req, res) => {
        res.json("Welcome to the API of MercadolibreApp.");
    });
    router.get("/api/items", async (req, res) => {
        const queryParam = req.query.q || "";
        const response = await mercadoLibreService_1.mercadoLibreService(queryParam, true);
        return (response === null || response === void 0 ? void 0 : response.status)
            ? res.status(response.status).json({
                state: "false",
                query: queryParam,
                response: response.message,
            })
            : res.json({ state: "true", query: queryParam, response });
    });
    router.get("/api/items/:id", async (req, res) => {
        const id = req.params.id || "";
        const response = await mercadoLibreService_1.mercadoLibreService(id, false);
        return (response === null || response === void 0 ? void 0 : response.status)
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
exports.routerLink = routerLink;
//# sourceMappingURL=routes.js.map