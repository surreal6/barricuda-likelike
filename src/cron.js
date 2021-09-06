const tLog = require('./traffic-log-management');
const mailer = require('./mailer');
const cron = require('node-cron');

module.exports = {
    // executeCronTasks: function() {
    //     //
    // },
    setupCronTasks: function() {
        let timezone = "GMT";
        if (process.env.TIMEZONE != null) {
            timezone = process.env.TIMEZONE;
        }

        // every day at 00:00 it changes log filename
        cron.schedule('0 0 0 * * *', () => {
            console.silentLog('--> cron activity: change log filename');
            logFileName = tLog.changeLogFileName(Date.now());
            console.silentLog('new log filename ' + logFileName);
            // testing
            mailer.sendMail('cron 00:00', 'change log filename ' + logFileName);
        }, {
            timezone: timezone
        });

        // every day at 04:00 it collects all previous day logs
        // and move logs to archive folder
        cron.schedule('0 4 * * *', () => {
            console.silentLog('--> cron activity: generate yesterday resume');
            let dailyResume = tLog.generateDailyLog();
            // testing
            mailer.sendMail('cron 04:00', 'generate yesterday resume ' + dailyResume);
        }, {
            timezone: timezone
        });

        // every monday at 06:00 it collects all daily logs from previous week
        // and move daily logs to archiveDaily folder
        cron.schedule('0 6 * * 1', () => {
            console.silentLog('--> cron activity: generate weekly resume');
            let weeklyResume = tLog.generateWeeklyLog();
            // testing
            mailer.sendMail('cron monday 06:00', 'generate weekly resume ' + weeklyResume);
        }, {
            timezone: timezone
        });
    
        // every monday at 06:30 it sends a mail with weekly report
        // and move weekly logs to archiveWeekly folder
        cron.schedule('30 6 * * 1', () => {
            console.silentLog('--> cron activity: send weekly resume');
            tLog.sendWeeklyLog();
            // testing
            mailer.sendMail('cron monday 06:30', 'send weekly resume');
        }, {
            timezone: timezone
        });
    }
};

