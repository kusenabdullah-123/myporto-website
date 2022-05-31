import { createConnection } from "mysql2";
const connection = createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

const querys = (query, data = []) => {
  return new Promise(async (resolve, reject) => {
    connection.execute(query, data, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export default querys;
