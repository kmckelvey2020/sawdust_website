import nodemailer from "nodemailer";
import { default_results } from "@/src/defaults_and_form_inputs/default_result";

/*-- ****************************************************** -->
<---                 HANDLE SEND EMAIL REQUESTS             -->
<--- ****************************************************** -*/

export default async function SendEmail(req, res) {
    const { cust_fname, cust_lname, contact_reason, cust_email, cust_message } = req.body;
    const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
            user: process.env.USER_EMAIL, 
            pass: process.env.PASS_EMAIL, 
        },
    });

    let result = {...default_results};
    try{
        // send mail with defined transport object
        const options = {
            from: process.env.USER_EMAIL, // no reply sender address
            to: process.env.RECIPIENT_EMAIL, // list of receivers
            subject: `Sawdust Castlerock message from ${ cust_fname } ${ cust_lname }`, // Subject line
            text:   `Name: ${ cust_fname } ${ cust_lname }\r`
                    + `Reason for contact: ${ contact_reason }\r`
                    + `Customer Email: ${ cust_email }\r`
                    + `Customer Message: ${ cust_message }\r`, // plain text body
        };
        transporter.sendMail(options, (err, emailRes) => {
            if(err) throw err;
            result = { //To do: fix "API resolved without sending a response" even though response is received
                "response": [`Message sent. ${emailRes.response}`],
                "reslength": 1,
                "message": [`Message sent. Thank you for contacting us!`]
            };
            console.log("Sent: " + emailRes.response);
            res.status(200).json(result);
        });
    }
    catch (err) {
        result = {
            "response": [`Something went wrong: ${err}`],
            "reslength": 0,
            "message": [`Something went wrong: ${err}`]
        }
        console.log(err);
        res.status(500).json(result);
    }
}