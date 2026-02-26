import sequelize from "./config/db.js";
import axios from "axios";
import env from "./config/env.js";

// MODELS
import Hero from "./models/hero.model.js";

async function sync(API, Model, fieldMap) {
  try {
    await sequelize.authenticate();
    let array;

    // fetch api here
    const { data } = await axios.get(API, { timeout: 15000 });

    array = findArray(data);

    if (!array) throw new Error("No array found in API response");

    const records = array.map((item) => {
      const record = {};
      for (const [dbField, apiField] of Object.entries(fieldMap)) {
        record[dbField] = item[apiField] ?? null;
      }
      return record;
    });

    await Model.bulkCreate(records, {
      updateOnDuplicate: Object.keys(fieldMap),
    });

    console.log("Data synced successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

function findArray(obj) {
  if (Array.isArray(obj)) return obj;

  for (const key of ["data", "items", "results"]) {
    if (Array.isArray(obj[key])) return obj[key];
  }
  throw new Error("No array found in API response");
}

// example usage
sync(env.API_URL, Hero, {
  id: "heroid",
  name: "name",
  image_source: "key",
});
