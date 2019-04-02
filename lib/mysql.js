let mysql = require('mysql');
// let config = require('./config.json');

let config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "port": "3306",
    "database": 1810
};

// mysql创建连接池
let pool = mysql.createPool({
    connectionLimit: 10,
    host: config.host,
    user: config.user,
    port: config.port,
    password: config.password,
    database: config.database
});

// mysql连接  语法封装
let connect = ()=> {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            !err ? resolve(connection) : reject(err)
        });
    })
}

//mysql查询 的语法封装
let find = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let connection = await connect();
        connection.query(`SELECT * FROM ${table} ${params ? 'where ?' : ''}`, [{
            ...params
        }], (err, results, fields) => {
            !err ? resolve(results) : reject(err)
            connection.release();
        });
    })
}

// mysql插入  语法封装
let insert = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let connection = await connect();
        connection.query(`INSERT INTO ${table} SET ?`, [{
            ...params
        }], (err, results, fields) => {
            !err ? resolve(results) : reject(err)
            connection.release();
        })
    })
}

//mysql删除 语法封装
let del = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let connection = await connect();
        connection.query(`DELETE FROM ${table} WHERE ?`, [{
            ...params
        }], (err, results, fields) => {
            !err ? resolve(results) : reject(err)
            connection.release();
        })
    })
}

//mysql更新 语法
let update = (table, params1, params2) => {
    return new Promise(async (resolve, reject) => {
        let connection = await connect();
        connection.query(`UPDATE ${table} SET ? WHERE ?`, [{
            ...params1
        }, {
            ...params2
        }], (err, results, fields) => {
            !err ? resolve(results) : reject(err)
            connection.release();
        })
    })
}
module.exports = {
    find,
    insert,
    del,
    update
}