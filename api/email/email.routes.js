const { sendEmailHandler } = require("./email.controller");

const router = require("express").Router();

router.post("/send-email", sendEmailHandler);

module.exports = router;