const fs = require('fs');

module.exports = {
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
        this.appendToFile('./logs/players-log.txt', data);
    }
};