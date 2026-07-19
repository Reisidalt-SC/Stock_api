import db from "../config/database/database.js";
import { DataTypes } from "sequelize";

const StockMovement = db.define("StockMovement", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  user_id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("ENTRY", "EXIT", "ADJUSTMENT"),
    allowNull: false,
  },
  quantity: { 
    type: DataTypes.INTEGER,
    allowNull: false,
   },
   reason : {
    type: DataTypes.STRING,
    allowNull: false,
   },
   created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
   }
});


export default StockMovement;
