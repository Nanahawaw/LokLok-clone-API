import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

const MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "loklok",
        link: "http://loklok.com"
    }
})

export const sendEmail = async (options) => {

    const mailOptions = {
        from: process.env.EMAIL,
        to: options.email,
        subject: options.subject,
        html: MailGenerator.generate(options)
    }
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

