const nodemailer = require('nodemailer');

const { MAILER_PASS, MAIL } = process.env;

class MailerService {
  constructor() {}

  async sendMail(infoEmail) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: MAIL,
          pass: MAILER_PASS,
        },
      });
      await transporter.sendMail(infoEmail);
      return { message: 'E-mail enviado.' };
    } catch (error) {
      return error;
    }
  }

  sendWelcomeMail(user) {
    const mail = {
      from: MAIL,
      to: user.email,
      subject: `¡Bienvenido/a a eLoleros, ${user.firstName}!`,
      html: `
        <h2>Hola ${user.firstName},</h2>
        <h3>¡Bienvenido/a a eLoleros! Nos alegra que hayas decidido unirte a nuestra comunidad.</h3>
        <p>En eLoleros podrás encontrar todo lo necesario para ser el mejor invocador de la grieta.</p>
        <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.</p>
        <p>¡Gracias por unirte a eLoleros!</p>
        <p>Saludos cordiales,</p>
        <p>El equipo de eLoleros</p>
      `,
    };

    this.sendMail(mail);
  }
}

module.exports = MailerService;
