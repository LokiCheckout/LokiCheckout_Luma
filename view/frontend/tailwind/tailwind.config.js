const {spacing, fontSize, borderRadius} = require("./tailwind.helper");
const {execSync} = require('child_process');
const path = require('path');

const configIni = path.resolve('./config.ini');
const magentoRootResolver = require('./lib/magento-root');
const magentoRoot = magentoRootResolver(configIni);

const getModulePaths = () => {
    const command = magentoRoot + '/bin/magento yireo:loki-checkout:module-path'
    return execSync(command).toString().trim().split("\n");
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        ...getModulePaths(),
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
