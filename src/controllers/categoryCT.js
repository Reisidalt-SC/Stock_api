import {Category} from '../models/index.js'


const categoryCreate = async (req, res) => {
    const {name, description} = req.body;
    try {
        const category = await Category.create({name, description});
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const categoryUpdate = async (req, res) => {
    const {id} = req.params;
    const {name, description} = req.body;
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        await category.update({name, description});
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const categoryDelete = async (req, res) => {
    const {id} = req.params;
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        await category.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



export { categoryCreate, categoryUpdate, categoryDelete, getAllCategories };