const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'terencedarilem@gmail.com',
        pass: '' 
    }
});

let mailOptions = {
    from: 'dariletgwill@gmail.com',
    to: 'darilethwill@gmail.com',
    subject: 'Test Email',
    text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
