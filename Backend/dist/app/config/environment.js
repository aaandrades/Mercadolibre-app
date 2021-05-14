"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.ENVIRONMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
// |----------------------------------------------------------------------------------------|
//     App Configuration
// |----------------------------------------------------------------------------------------|
exports.ENVIRONMENT = process.env.NODE_ENV;
const PROD = exports.ENVIRONMENT === "production";
exports.PORT = process.env.PORT;
//# sourceMappingURL=environment.js.map