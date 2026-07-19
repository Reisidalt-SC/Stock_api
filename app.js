import express from 'express';
import {Category, Product, StockMovement, Supplier, User} from './src/models/index.js';
import db from './src/config/database/database.js';
import { dataBaseConnect } from './src/config/database/database.js';
import categoryRT from "./src/routes/categoryRT.js";
import productRT from "./src/routes/productRT.js";
import stockMovementRT from "./src/routes/stockMovementRT.js";
import supplierRT from "./src/routes/supplierRT.js";
import userRT from "./src/routes/userRT.js";
import "dotenv/config"; 

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use("/products", productRT);
app.use("/categories", categoryRT);
app.use("/suppliers", supplierRT);
app.use("/stock-movements", stockMovementRT);
app.use("/users", userRT)


const boot = () => {
    app.listen(port, () => {
        try {
            console.log(`Server is running on http://localhost:${port}`);
            dataBaseConnect();
        } catch (error) {
            console.error('Error starting the server:', error);
        }
        ;
    })
};

boot(port);