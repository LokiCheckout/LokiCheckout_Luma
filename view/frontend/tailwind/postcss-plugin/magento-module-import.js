const ini = require("ini");
const fs = require('fs');
const {execSync} = require('child_process');
const path = require("path");
const magentoRootResolver = require('../lib/magento-root');
const magentoRoot = magentoRootResolver();

const getLokiCheckoutModules = () => {
    const jsonFile = magentoRoot + '/app/etc/loki-checkout.json';
    if (!fs.existsSync(jsonFile)) {
        throw new Error('Could not find file "app/etc/loki-checkout.json"');
    }

    return JSON.parse(fs.readFileSync(jsonFile).toString());
}

const lokiCheckoutModules = getLokiCheckoutModules();

const getModuleCss = (moduleFile) => {
    let allModuleCss = '';
    lokiCheckoutModules.forEach(module => {
        if (!module.enabled) {
            return;
        }

        let modulePath = module.path;
        if (!modulePath.startsWith('/')) {
            modulePath = magentoRoot +  '/' + modulePath;
        }

        const moduleCss = readCss(modulePath + '/' + moduleFile);
        if (moduleCss) {
            allModuleCss = allModuleCss + moduleCss;
        }
    });

    return allModuleCss;
}

const readCss = (cssFile) => {
    if (!fs.existsSync(cssFile)) {
        return;
    }

    let css = fs.readFileSync(cssFile).toString();
    if (!css) {
        return;
    }

    const cssFolder = path.dirname(cssFile);
    const importRegex = /@import\s+(?:url\()?['"]?([^'"\)]+)['"]?\)?\s*;/gi;
    const imports = [];

    const matches = [...css.matchAll(importRegex)];
    if (matches && matches.length > 0) {
        matches.forEach(match => {
            const importFile = match[1];
            const importCss = readCss(cssFolder + '/' + importFile);
            if (importCss) {
                css = css.replace(match[0], importCss);
            } else {
                css = css.replace(match[0], '');
            }
        });
    }

    return css;
}

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'YireoPostCssMagentoImport',
        Once (root) {
            root.walkAtRules('magento-module-import', atRule => {
                const moduleFile = atRule.params.replace(/"/g, '').trim();
                const moduleCss = getModuleCss(moduleFile);
                if (moduleCss) {
                    atRule.replaceWith(moduleCss);
                } else {
                    atRule.replaceWith('');
                }
            });
        },
    }
}

module.exports.postcss = true
