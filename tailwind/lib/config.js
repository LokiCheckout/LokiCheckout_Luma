const ini = require("ini");
const fs = require('fs');

module.exports = (configFile) => {
    if (!fs.existsSync(configFile)) {
        console.error('No configuration file found: ' + configFile);
        process.exit();
    }

    return ini.parse(fs.readFileSync(configFile, 'utf-8'));
}
