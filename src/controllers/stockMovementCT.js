import { StockMovement } from '../models/index.js'


const stock = StockMovement;



const stockMovementCreate = async (req, res) => {
    const { product_id, user_id, type, quantity,  reason } = req.body;
    try {
        const stockMovement = await stock.create({ product_id, user_id, type, quantity,  reason });
        res.status(201).json(stockMovement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const stockMovementUpdate = async (req, res) => {
    const { id } = req.params;
    const { product_id, user_id, type, quantity,  reason } = req.body;

    try {
        const stockMovement = await stock.findByPk(id);
        if (!stockMovement) {
            return res.status(404).json({ error: "Stock movement not found" });
        }
        await stockMovement.update({ product_id, user_id, type, quantity,  reason });
        res.status(200).json(stockMovement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const stockMovementDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const stockMovement = await stock.findByPk(id);
        if (!stockMovement) {
            return res.status(404).json({ error: "Stock movement not found" });
        }
        await stockMovement.destroy();
        res.status(200).json({ message: "Stock movement deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



const getAllStockMovements = async (req, res) => {
    try {
        const stockMovements = await stock.findAll();
        res.status(200).json(stockMovements);
    } catch (error) {
        res.status(400).json({ error: error.message });
    } 
};

export { stockMovementCreate, stockMovementUpdate, stockMovementDelete, getAllStockMovements };