let nodemailer = require('nodemailer');
const templateService = require('../services/template.service');
//const { EMAIL , PASSWORD } = require('../routes/env.js')


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

async function sendDM(user, mailType) {

    try {
        console.log('Calling Mailer service with payload ', JSON.stringify(user));

        const opts = templateService.getEmailOpts(user, mailType);

        const data = await transporter.sendMail(opts);

        return { success : true, message : 'Email sent.', data : data }
    }
    catch (err) {
        console.log(err);
        return { success : false, message : 'Email service not working.' , error : err}
    }
}


exports.sendDM = sendDM;
