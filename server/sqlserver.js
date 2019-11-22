const mysql = require('mysql');

const pool = mysql.createPool({
  //connectionLimit: 10,
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'testSQL2019',
});

let goldenDB = {};

goldenDB.all = (fname, age) => { //goldenDB.one = (user_id) => {

      return new Promise((resolve, reject) => {

          pool.query("INSERT INTO golden.userone VALUES(?,?);",[fname, age], (err, results) => {

            if(err){
              return reject(err);
            }
            return resolve(results);

          });

      });



}



module.exports = goldenDB;
