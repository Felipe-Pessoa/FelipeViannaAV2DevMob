import connection from './openConnection';

type Param = string | number;

function dbQuery(query: string, params: Param[] = []) {
  const db = connection();

  return new Promise((resolve, reject) => {
    db.all(query, params, (err, response) => {
      if (err) return reject(err);
      return resolve(response);
    });
  }).finally(() => db.close());
}

export default dbQuery;
