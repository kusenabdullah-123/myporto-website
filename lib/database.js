import { createConnection } from "mysql2";
const connection = createConnection({
  host: process.env.NEXT_PUBLIC_HOST,
  user: process.env.NEXT_PUBLIC_USERNAME,
  database: process.env.NEXT_PUBLIC_DATABASE,
  password: process.env.NEXT_PUBLIC_PASSWORD,
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
