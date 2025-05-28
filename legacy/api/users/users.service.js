const pool = require("../../config/db");

const selectFromEmailPassword = (data, callBack) => {
  pool.query(
    `SELECT id, email, password FROM usuarios WHERE email = ? AND password = ?`,
    [data.email, data.password],
    (error, results, fields) => {
      if (error) return callBack(error);
      return callBack(null, results);
    }
  );
};

module.exports = {
  selectFromEmailPassword,
};
