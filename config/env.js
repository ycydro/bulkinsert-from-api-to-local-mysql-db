import dotenv from "dotenv";
dotenv.config();

const env = {
  // PORT: process.env.PORT || 5000,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASS: process.env.DB_PASSWORD,
  API_URL: process.env.API_URL,
};

export default env;
