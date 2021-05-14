import dotenv from "dotenv";

dotenv.config({ path: ".env" })

// |----------------------------------------------------------------------------------------|
//     App Configuration
// |----------------------------------------------------------------------------------------|

export const ENVIRONMENT = process.env.NODE_ENV;
const PROD = ENVIRONMENT === "production"
export const PORT = process.env.PORT
