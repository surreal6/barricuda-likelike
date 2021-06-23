const nodemailer = require("nodemailer");
const cron = require('node-cron');
const fs = require('./traffic-log-management');

module.exports = {
    sendLogMail: function (host, user, pass, to, bcc, fileName, fileUrl) {
        async function sendMail() {
            let transporter = nodemailer.createTransport({
                host: host,
                port: 465,
                secure: true,
                auth: {
                    user: user,
                    pass: pass,
                },
            });
            let time = new Date();
            let message = await transporter.sendMail({
                from: user,
                to: to,
                bcc: bcc,
                subject: "📊📋 Log likelike Test ✔ 🕰️📬 " + time.toLocaleString(), // Subject line
                text: "Hello world",
                html: "<b>Hello world?</b>",
                attachments: {
                    filename: fileName,
                    path: fileUrl
                }
            });

            console.log("----- Message sent to: %s", to);
        }

        sendMail().then(function() {
            console.log('--- backup and clear logs???????');
        }).catch(console.error);
    },
    setupMail: function() {
        const fileName = 'players-log.txt';
        const fileUrl = './logs/players-log.txt';
        const weeklyUrl = './logs/weeklyFile.csv';

        this.sendLogMail(
            process.env.MAILHOST, 
            process.env.MAILUSER, 
            process.env.MAILPASS, 
            process.env.MAILTO, 
            process.env.MAILBCC,
            fileName,
            fileUrl
        );

        cron.schedule('59 23 * * *', () => {
            console.log('running a task every day at 23:59');
            fs.appendToFile(weeklyUrl, 'running a task every day at 23:59\n')
        });

        cron.schedule('* * * * *', () => {
            console.log('running a task every minute');
            //sendMail(fileName, fileUrl);
            fs.appendToFile(weeklyUrl, fs.timeToFileName(new Date()) + ' \n')
        });
    }
};

