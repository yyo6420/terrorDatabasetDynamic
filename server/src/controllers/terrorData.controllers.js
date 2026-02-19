import csv from "async-csv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const CSV_PATH = path.join(dirname, "..", "data", "terrorData.csv");
export const getTerrorData = async (request, response) => {
  try {
    const csvString = await fs.readFile(CSV_PATH, "utf-8");

    const rows = await csv.parse(csvString);
    response
      .status(200)
      .json({ massage: "The data connection was created successfully ;)" });
    return rows;
  } catch (error) {
    console.error(error);
    response.status(503).json({ error: "Data connection failed :(" });
  }
};
