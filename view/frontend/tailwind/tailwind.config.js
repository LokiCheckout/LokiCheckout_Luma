const {spacing, fontSize, borderRadius} = require("./tailwind.helper");
const {execSync} = require('child_process');
const ini = require('ini');
const path = require('path');
const fs = require('fs');

const configIni = path.resolve('./config.ini');
const configResolver = require('./lib/config');
const config = configResolver(configIni);

const magentoRootResolver = require('./lib/magento-root');
const magentoRoot = magentoRootResolver(configIni);

const getModulePaths = (moduleNames) => {
    const command = magentoRoot
        + '/bin/magento yireo:loki-checkout-luma:module-path '
        + moduleNames.join(',');
    return execSync(command).toString().trim().split("\n");
}

const modulePaths = getModulePaths(config.modules);

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
