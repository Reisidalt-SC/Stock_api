import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database/database.js";


const User = db.define(`User`,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    creationDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    password: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'employee'),
        defaultValue: 'employee'
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
});

export default User;