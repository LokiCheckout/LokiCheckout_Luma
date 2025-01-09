const {spacing, fontSize, borderRadius} = require("./tailwind.helper");
const {execSync} = require('child_process');
const ini = require('ini');
const fs = require('fs');

var config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

const getModulePath = (moduleName) => {
    // @todo: Do this only once
    const command = config.magento_root + '/bin/magento yireo:loki-checkout-luma:module-path ' + moduleName;
    const output = execSync(command).toString().trim();
    return output;
}

const moduleFolders = [];
config.modules.forEach(module => {
    moduleFolders.push(getModulePath(module) + "/view/frontend/templates/**/*.phtml");
    moduleFolders.push(getModulePath(module) + "/view/frontend/layout/*.xml");
    moduleFolders.push(getModulePath(module) + "/etc/loki_checkout.xml");
});

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        ...moduleFolders,
        "./view/frontend/templates/**/*.phtml",
        "./view/frontend/layout/*.xml",
    ],
    /*safelist: [
        "loki-checkout",
        {
            pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
        },
    ],*/
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
