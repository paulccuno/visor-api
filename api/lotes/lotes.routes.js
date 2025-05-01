const { getLotes, updateLotesDisponibility, updateLotesVisibility, updateLotesPrecio } = require("./lotes.controller");

const router = require("express").Router();

router.get("/lotes", getLotes);
router.put("/lotes/disponibilidad", updateLotesDisponibility);
router.put("/lotes/visibilidad", updateLotesVisibility);
router.put("/lotes/precio", updateLotesPrecio);

module.exports = router;
