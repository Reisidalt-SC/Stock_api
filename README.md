# Stock Management API

A simple, structured Node.js REST API for managing product stock, categories, suppliers, users, and tracking inventory movements (inputs and outputs).

## 🚀 Features

- **User Management**: Track which user performs an inventory update.
- **Supplier Directory**: Manage vendors and suppliers providing the goods.
- **Category Organization**: Categorize products for clean sorting.
- **Product Catalog**: Maintain accurate records of pricing, descriptions, and structural relations.
- **Stock Movements Log**: Log every single inward (restock) or outward (sales/disposal) change with quantities and historical tracking.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database Backend**: MySQL
- **ORM**: Sequelize

---

## 📁 Project Structure

```text
Stock_api-main/
├── src/
│   ├── config/       # Database connection setups
│   ├── controllers/  # Route logic and database operations
│   ├── models/       # Sequelize database tables and associations
│   └── routes/       # Express HTTP endpoint definitions
├── app.js            # Server entry point
├── .env.example      # Template for system environment variables
└── package.json      # Dependencies and execution scripts
