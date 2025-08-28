const {spacing, fontSize, borderRadius} = require("./tailwind.helper");
const {execSync} = require('child_process');
const path = require('path');
const fs = require('fs');

const configIni = path.resolve('./config.ini');
const magentoRootResolver = require('./lib/magento-root');
const magentoRoot = magentoRootResolver(configIni);

const getLokiCheckoutModules = () => {
    const jsonFile = magentoRoot + '/app/etc/loki-checkout.json';
    if (!fs.existsSync(jsonFile)) {
        throw new Error('Could not find file "app/etc/loki-checkout.json"');
    }

    return JSON.parse(fs.readFileSync(jsonFile).toString());
}

const contentPaths = [];
const lokiCheckoutModules = getLokiCheckoutModules();
lokiCheckoutModules.forEach(module => {
    const modulePath = module.path;
    contentPaths.push(modulePath + '/view/frontend/templates/*.phtml');
    contentPaths.push(modulePath + '/view/frontend/templates/**/*.phtml');
    contentPaths.push(modulePath + '/view/frontend/layout/*.xml');
    contentPaths.push(modulePath + '/etc/loki_components.xml');
    contentPaths.push(modulePath + '/etc/loki_checkout.xml');
});

/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: [
        'loki-col-span',
    ],
    content: [
        ...contentPaths,
        "./view/frontend/templates/*.phtml",
        "./view/frontend/templates/**/*.phtml",
        "./view/frontend/layout/*.xml",
    ],
    important: ":where(.loki)",
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
