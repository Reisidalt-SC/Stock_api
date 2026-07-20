import { faker } from "@faker-js/faker";
import { Product, Category, Supplier } from "../models/index.js";

export async function seedProducts() {
  try {
    const categories = await Category.findAll();
    const suppliers = await Supplier.findAll();

    if (categories.length === 0 || suppliers.length === 0) {
      console.log("You must run the Category and Supplier seeder before the Product seeder!");
      return;
    }

    const products = [];

    
    for (let i = 0; i < 10; i++) {
      
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomSupplier = suppliers[Math.floor(Math.random() * suppliers.length)];

      products.push({
        name: faker.commerce.productName(), 
        description: faker.commerce.productDescription(),
        sku: faker.string.alphanumeric(8),
        price: parseFloat(faker.commerce.price({ min: 10, max: 1000, dec: 2 })), 
        quantity: faker.number.int({ min: 1, max: 100 }),
        category_id: randomCategory.id, 
        supplier_id: randomSupplier.id, 
      });
    }
    await Product.bulkCreate(products);
    
    console.log("fake products created!");
  } catch (error) {
    console.error("Error to create fake products!", error);
  }
}
