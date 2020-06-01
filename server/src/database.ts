import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);
pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connect');
});
// pool.then(p => {
//     return p.getConnection();
// }).then(connection => {
//     connection.release();
//     console.log('DB is connect');
// });

export default pool;