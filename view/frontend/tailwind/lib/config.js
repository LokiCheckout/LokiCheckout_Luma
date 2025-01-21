const ini = require("ini");
const fs = require('fs');

module.exports = (configFile) => {
    if (!fs.existsSync(configFile)) {
        console.warning('No configuration file found: ' + configFile);
        return {};
    }

    return ini.parse(fs.readFileSync(configFile, 'utf-8'));
}
