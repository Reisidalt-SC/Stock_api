import { faker } from "@faker-js/faker";
import {User} from '../models/index.js';


export async function seedUsers() {
  try {
    const Users = [];

    
    for (let i = 0; i < 10; i++) {
      Users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "password",
        role: faker.helpers.arrayElement(['admin', 'employee']),
      });
    }
    await User.bulkCreate(Users);
    
    console.log("fake Users created!");
  } catch (error) {
    console.error("Error to create fake Users!", error);
  }
}

