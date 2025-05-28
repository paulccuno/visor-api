const nodemailer = require('nodemailer');

// Configurar el transporte de correo electrónico
const transporter = nodemailer.createTransport({
    host: 'mail.inversionesaqp.com', // Reemplaza con el nombre de tu servidor SMTP
    port: 465, // Reemplaza con el puerto de tu servidor SMTP
    secure: true, // Cambia a true si el puerto es seguro (por ejemplo, 465)
    auth: {
      user: 'noreply@inversionesaqp.com', // Tu dirección de correo electrónico gestionada por cPanel
      pass: '7n^&^v]U71*k', // Tu contraseña de correo electrónico
    },
  });

// Función para enviar correos electrónicos
const sendEmail = (data, callBack) => {
  const { destinatario, asunto, mensaje } = data;

  const mailOptions = {
    from: 'noreply@inversionesaqp.com', // Remitente
    to: destinatario, // Destinatario (reemplaza con la dirección de correo del destinatario)
    subject: asunto,
    text: mensaje,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      callBack(error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
      callBack(null, 'Correo electrónico enviado correctamente');
    }
  });
};

module.exports = {
  sendEmail,
};