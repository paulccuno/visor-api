const { sendEmail } = require("./email.service");

const sendEmailHandler = (req, res) => {
  const { destinatario, asunto, mensaje } = req.body;

  sendEmail({ destinatario, asunto, mensaje }, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Error al enviar el correo electrónico",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Correo electrónico enviado correctamente",
    });
  });
};

module.exports = {
  sendEmailHandler,
};