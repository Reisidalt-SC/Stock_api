import sequelize from "sequelize";
import {
  Category,
  Product,
  StockMovement,
  Supplier,
  User,
} from "../../models/index.js";
import "dotenv/config"; 




const dataBaseName = process.env.DB_NAME;

const tempDataBaseConnect = new sequelize("mysql", process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

const db = new sequelize( dataBaseName, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

const dataBaseConnect = async () => {
  try {
    await tempDataBaseConnect.authenticate();
    await tempDataBaseConnect.query(`CREATE DATABASE IF NOT EXISTS ${dataBaseName};`);
    console.log("success to connect database!");
    await tempDataBaseConnect.close();
    try {
      await db.authenticate();
      console.log("success to connect database!");
      await db.sync({ force: true });
      console.log("models synchronized");
    } catch (error) {
      console.error("Error to synchronize models", error);
    }
  } catch (error) { 
    console.error("Error to connect database:", error);
  }
};


export default db;
export { dataBaseConnect };
