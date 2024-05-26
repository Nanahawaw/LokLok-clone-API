import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import dotenv from "dotenv"

dotenv.config();

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
    const emailBody = {
        body: {
            intro: options.intro,
            action: {
                instructions: options.instructions,
                button: {
                    color: '#22BC66', // Optional action button color
                    text: options.buttonText,
                    link: options.link
                }
            },
            outro: options.outro
        }
    };
    const emailContent = MailGenerator.generate(emailBody);

    const mailOptions = {
        from: process.env.EMAIL,
        to: options.email,
        subject: options.subject,
        html: emailContent
    }
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error('Error sending email:', error);

    }
}

