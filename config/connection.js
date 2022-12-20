require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("mysql:root:HigurashiFallout7&@localhost/ecommerce_db");

module.exports = sequelize;
