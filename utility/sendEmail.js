
import { createTransport } from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";

export default async function sendOurEmail(email){
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "nodeappiti@gmail.com",
            pass: "oiwf nxib napb xlji",
        },
    });
    
    
    const info = await transporter.sendMail({
        from: '"Note App ITI 👻" <nodeappiti@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: emailTemplate(email), // html body
    });
    
    
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
