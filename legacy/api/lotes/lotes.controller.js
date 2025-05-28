const { selectAllLotes, updateDisponibilityLoteById, updateVisibilityLoteById, updatePrecioLoteById } = require("./lotes.service");

const getLotes = (req, res) => {
  selectAllLotes({}, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const updateLotesDisponibility = (req, res) => {
  const { id, disponibility } = req.body;
  updateDisponibilityLoteById({ id, disponibility }, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const updateLotesVisibility = (req, res) => {
  const { id, visibility } = req.body;
  updateVisibilityLoteById({ id, visibility }, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const updateLotesPrecio = (req, res) => {
  const { id, precio } = req.body;
  updatePrecioLoteById({ id, precio }, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

module.exports = {
  getLotes,
  updateLotesDisponibility,
  updateLotesVisibility,
  updateLotesPrecio
};
