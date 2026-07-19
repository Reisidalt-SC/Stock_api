import Category from './category.js';
import Product from './product.js';
import StockMovement from './stockMovement.js';
import Supplier from './supplier.js';
import User from './user.js';




Category.hasMany(Product, {foreignKey: 'category_id', as: 'products'});
Product.belongsTo(Category, {foreignKey: 'category_id', as: 'category'});


Supplier.hasMany(Product, {foreignKey: 'supplier_id', as: 'products'});
Product.belongsTo(Supplier, {foreignKey: 'supplier_id', as: 'supplier'});


Product.hasMany(StockMovement, {foreignKey: 'product_id', as: 'stockMovements'});
StockMovement.belongsTo(Product, {foreignKey: 'product_id', as: 'product'});

User.hasMany(StockMovement, {foreignKey: 'user_id', as: 'stockMovements'});
StockMovement.belongsTo(User, {foreignKey: 'user_id', as: 'user'});


export {Category, Product, StockMovement, Supplier, User};