const ini = require("ini");
const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

const magentoRootResolver = require('../lib/magento-root');
const magentoRoot = magentoRootResolver(path.resolve('./config.ini'));

const getLokiCheckoutModules = () => {
    const jsonFile = magentoRoot + '/app/etc/loki-checkout.json';
    if (!fs.existsSync(jsonFile)) {
        throw new Error('Could not find file "app/etc/loki-checkout.json"');
    }

    return JSON.parse(fs.readFileSync(jsonFile).toString());
}

const lokiCheckoutModules = getLokiCheckoutModules();

const getModuleCss = (moduleFile) => {
    let moduleCss = '';
    lokiCheckoutModules.forEach(module => {
        if (!module.enabled) {
            return;
        }

        const moduleCssFile = module.path + '/' + moduleFile;
        if (!fs.existsSync(moduleCssFile)) {
            return;
        }

        moduleCss = moduleCss + fs.readFileSync(moduleCssFile).toString();
    });

    return moduleCss;
}

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'YireoPostCssMagentoImport',
        Once (root) {
            root.walkAtRules('magentoModuleImport', atRule => {
                const moduleFile = atRule.params.replace(/"/g, '').trim();
                const moduleCss = getModuleCss(moduleFile);
                atRule.replaceWith(moduleCss);
            });
        },
    }
}

module.exports.postcss = true
