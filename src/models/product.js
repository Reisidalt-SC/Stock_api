import db from "../config/database/database.js";
import { DataTypes } from "sequelize";

const Product = db.define(`Product`,{
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true, 
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false 
    },
    description: {
        type: db.Sequelize.STRING,
        allowNull: false 
    },
    sku: {
        type: DataTypes.STRING(8),
        validate: {len: [1, 8]},
        autoincrement: true,
        allowNull: false
    },
    price: {
        type: db.Sequelize.FLOAT,
        allowNull: false 
    },
    quantity: {
        type: db.Sequelize.INTEGER,
        allowNull: false 
    },
    category_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false 
    },
    supplier_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false 
    }
});


export default Product;