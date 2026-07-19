import {Supplier} from '../models/index.js'

const supplierCreate = async (req, res) => { 
    const { company_name, cnpj, email, phone, address } = req.body;
    try {
        const supplier = await Supplier.create({ company_name, cnpj, phone, email, address });
        res.status(201).json(supplier);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const supplierUpdate = async (req, res) => {
    const {id} = req.params;
    const { company_name, cnpj, email, phone, address } = req.body;
    try {
        const supplier = await Supplier.findByPk(id);
        if (!supplier) {
            return res.status(404).json({ error: "Supplier not found" });
        }
        await supplier.update({ company_name, cnpj, phone, email, address });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




const supplierDelete = async (req, res) => {
    const {id} = req.params;
    try {
        const supplier = await Supplier.findByPk(id);
        if (!supplier) {
            return res.status(404).json({ error: "Supplier not found" });
        }
        await supplier.destroy();
        res.status(200).json({ message: "Supplier deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { supplierCreate, supplierUpdate, supplierDelete, getAllSuppliers };