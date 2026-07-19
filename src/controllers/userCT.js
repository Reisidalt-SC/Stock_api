import {User} from '../models/index.js'

const userCreate = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const user = await User.create({ name, email, password, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



const userUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body; 

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await user.update({ name, email, password, role });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



const userDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await user.destroy();
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { userCreate, userUpdate, userDelete, getAllUsers };