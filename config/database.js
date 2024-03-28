import { Sequelize } from "sequelize";

//dipakai di komputer server
// const DB_HOST = process.env.DB_HOST || "db";

// const DB_PASSWORD = process.env.DB_PASSWORD || "brin2023";
// const DB_NAME = 'mbkm_brin' 

// const db = new Sequelize(DB_NAME, 'root' ,DB_PASSWORD,{
//     host: DB_HOST,
//     dialect: "mysql",
//     logging: false
// });

// dipakai di localhost
const db = new Sequelize('handphones', 'root','',{
    host: "localhost",
    dialect: "mysql",
    logging: false
});

export default db;