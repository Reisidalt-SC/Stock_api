import { faker } from "@faker-js/faker";
import {Category} from '../models/index.js';


export async function seedCategories() {
  try {
    const Categories = [];

    
    for (let i = 0; i < 10; i++) {
      Categories.push({
        name: faker.commerce.department(), 
        description: faker.commerce.productDescription(),
      });
    }
    await Category.bulkCreate(Categories);
    
    console.log("fake categories created!");
  } catch (error) {
    console.error("Error to create fake categories!", error);
  }
}

