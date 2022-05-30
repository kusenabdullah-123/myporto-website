import { createConnection } from "mysql2";

const connection = createConnection({
  host: "localhost",
  user: "root",
  database: "website",
  password: "root",
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
