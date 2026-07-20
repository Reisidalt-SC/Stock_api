import { seedCategories } from "./category.js";
import {seedProducts} from "./product.js"
import {seedMovements} from "./stockMovement.js"
import {seedSuppliers} from "./supplier.js"
import {seedUsers} from "./user.js"




export const seedsCreate = async () => {
   await seedSuppliers();
   await seedCategories();
   await seedUsers();
   await seedProducts();
   await seedMovements();
};