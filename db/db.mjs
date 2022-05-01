import mysql from "mysql2/promise"
export default (() => {
    var connection;
    return {
        connect: async () => {
            connection = await mysql.createPool({
                host: process.env.HOST,
                user: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                port: process.env.PORT
            });
        },
        execute: async (query) => {
            const [rows, fields] = await connection.execute(query);
            return rows;
        }
    }
})()