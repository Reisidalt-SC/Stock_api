import {Product} from '../models/index.js'



const productCreate = async (req, res) => {
    const { name, description, price, quantity, category_id, supplier_id } = req.body;
    try {
        const product = await Product.create({ name, description, price, quantity, category_id, supplier_id });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


 const productUpdate = async (req, res) => {
    const {id} = req.params;
    const { name, description, price, quantity, supplier_id } = req.body;

    try {
        await Product.findByPk(id).then((product) => {
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            product.update({ name, description, price, quantity, supplier_id });
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 };


 const productDelete = async (req, res) => {
    const {id} = req.params;
    try {
        await Product.findByPk(id).then((product) => {
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            product.destroy();
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 };



 const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 };



 export { productCreate, productUpdate, productDelete, getAllProducts };