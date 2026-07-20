import { faker } from "@faker-js/faker";
import {Supplier} from '../models/index.js';


export async function seedSuppliers() {
  try {
    const Suppliers = [];

    
    for (let i = 0; i < 10; i++) {
      Suppliers.push({
        company_name: faker.company.name(),
        cnpj: faker.string.numeric(14),
        email: faker.internet.email(),
        phone: faker.string.numeric(11),
        address: faker.location.streetAddress({ useFullAddress: true }),
      });
    }
    await Supplier.bulkCreate(Suppliers);
    
    console.log("fake Suppliers created!");
  } catch (error) {
    console.error("Error to create fake Suppliers!", error);
  }
}

