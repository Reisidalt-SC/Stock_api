import { faker } from "@faker-js/faker";
import { StockMovement, User, Product } from "../models/index.js";

export async function seedMovements() {
  try {
    const products = await Product.findAll();
    const users = await User.findAll();

    if (products.length === 0 || users.length === 0) {
      console.log("You must run the Product and User seeder before the movements seeder!");
      return;
    }

    const movements = [];

    
    for (let i = 0; i < 10; i++) {
      
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const randomUser = users[Math.floor(Math.random() * users.length)];

      products.push({
        product_id: randomProduct.id,  
        user_id: randomUser.id,  
        type: faker.helpers.arrayElement(['ENTRY', 'EXIT', 'ADJUSTMENT']), 
        quantity: faker.number.int({ min: 1, max: 100 }),
        reason: faker.commerce.productDescription(),  
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await Product.bulkCreate(movements);
    
    console.log("fake movements created!");
  } catch (error) {
    console.error("Error to create fake movements!", error);
  }
}