import mysql from "mysql2/promise"
export default (() => {
    var connection;
    return {
        connect: async () => {
            
            connection = await mysql.createPool({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'my-cv'
            });
        },
        execute: async (query) => {
            const [rows, fields] = await connection.execute(query);
            return rows;
        }
    }
})()