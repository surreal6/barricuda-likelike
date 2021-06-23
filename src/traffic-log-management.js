const fs = require('fs');

const currentLog = './logs/players-log.txt';

module.exports = {
    timeToFileName: function (time) {
        return time.toISOString().split('.')[0];
    },
    writeToFile: function (file, data) {
        fs.writeFile(file, data, 'utf8', (err) => {
            if (err) return console.log(`Error writing file ` + file + ` : ${err}`);
            console.log(`File ` + file + ` is written successfully!`);
        });
    },
    appendToFile: function (file, data) {
        fs.appendFile(file, data, (err) => {
            if (err) return console.log(`Error appending to file ` + file + ` : ${err}`);
            console.log(`File ` + file + ` is updated successfully!`);
        })
    },
    appendToLog: function (data) {
        this.appendToFile(currentLog, data);
    },
    serverStart: function (startTime, url) {
        let timeString = this.timeToFileName(new Date());
        fs.rename(currentLog, './logs/trafficLog_' + timeString + '.csv', function() {
            console.log('renombrados ficheros último reset');
        });
        this.writeToFile(currentLog, 'server started ' + startTime + '\n');
    },
    generateDailyLog: function () {
        let timeString = this.timeToFileName(new Date());
        fs.rename(currentLog, './logs/log_' + timeString + '.csv', function() {
            console.log('generate log ' + timeString);
        });
    },
};