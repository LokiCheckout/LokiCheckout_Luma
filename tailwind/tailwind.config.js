const {spacing, fontSize, borderRadius} = require("./tailwind.helper");
const {execSync} = require('child_process');
const ini = require('ini');
const fs = require('fs');

var config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
if (!config.magento_root || !fs.existsSync(config.magento_root)) {
    console.error('Non existing Magento root');
    process.exit();
}

const getModulePaths = (moduleNames) => {
    const command = config.magento_root
        + '/bin/magento yireo:loki-checkout-luma:module-path '
        + moduleNames.join(',');
    return execSync(command).toString().trim();
}

const modulePaths = getModulePaths(config.modules).split("\n");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        ...modulePaths,
        "./view/frontend/templates/**/*.phtml",
        "./view/frontend/layout/*.xml",
    ],
    important: ":where(.loki-checkout)",
    theme: {
        spacing,
        fontSize,
        borderRadius,
    },
    corePlugins: {
        preflight: false,
        container: false,
    },
};
