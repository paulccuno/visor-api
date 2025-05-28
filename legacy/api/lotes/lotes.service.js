const pool = require("../../config/db");

const selectAllLotes = (data, callBack) => {
  pool.query(`SELECT * FROM lotes`, [], (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  });
};

const updateDisponibilityLoteById = (data, callBack) => {
  pool.query(
    `UPDATE lotes SET disponibilidad = ? WHERE id = ?`,
    [data.disponibility, data.id],
    (error, results, fields) => {
      if (error) return callBack(error);
      return callBack(null, results);
    }
  );
};

const updateVisibilityLoteById = (data, callBack) => {
  pool.query(
    `UPDATE lotes SET visibilidad_precio = ? WHERE id = ?`,
    [data.visibility, data.id],
    (error, results, fields) => {
      if (error) return callBack(error);
      return callBack(null, results);
    }
  );
};

const updatePrecioLoteById = (data, callBack) => {
  pool.query(
    `UPDATE lotes SET precio = ? WHERE id = ?`,
    [data.precio, data.id],
    (error, results, fields) => {
      if (error) return callBack(error);
      return callBack(null, results);
    }
  );

};

module.exports = {
  selectAllLotes,
  updateDisponibilityLoteById,
  updateVisibilityLoteById,
  updatePrecioLoteById
};
