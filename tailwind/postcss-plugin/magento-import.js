const ini = require("ini");
const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

const magentoRootResolver = require('../lib/magento-root');
const magentoRoot = magentoRootResolver(path.resolve('./config.ini'));

const getModuleCss = (modulePath) => {
    const command = magentoRoot
        + '/bin/magento yireo:loki-checkout-luma:import-css '
        + modulePath;
    return execSync(command).toString();
}

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'YireoPostCssMagentoImport',
        Once (root) {
            root.walkAtRules('magentoImport', atRule => {
                const modulePath = atRule.params.replace(/"/g, '').trim();
                const moduleCss = getModuleCss(modulePath);
                atRule.replaceWith(moduleCss);
            });
        },
    }
}

module.exports.postcss = true
