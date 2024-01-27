import mysql from "mysql2";

const access = {
  host: "localhost",
  user: "root",
  database: "users"
};

const connection = await mysql.createConnection(access);

async function createUsers(sql) {
  try {
    const customersTable =
      await sql.execute(`CREATE TABLE [IF NOT EXISTS] customers (
      customer_id INT PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      color VARCHAR(255)
      );`);
    console.log("customersTable", customersTable);
  } catch (error) {
    console.log("customers table creation error", error);
  }
}

async function main() {
  await createUsers(connection);
}
