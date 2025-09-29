const {spacing, fontSize, borderRadius} = require("./tailwind.helper");
const colors = require('tailwindcss/colors');
const {execSync} = require('child_process');
const path = require('path');
const fs = require('fs');

const magentoRootResolver = require('./lib/magento-root');
const magentoRoot = magentoRootResolver();

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
    contentPaths.push(modulePath + '/view/frontend/tailwind/*.css');
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
        extend: {
            colors: {
                primary: {
                    lighter: colors.blue['300'],
                    "DEFAULT": colors.blue['800'],
                    darker: colors.blue['900']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                background: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet
            },
            textColor: {
                orange: colors.orange,
                red: { ...colors.red,
                    "DEFAULT": colors.red['500']
                },
                primary: {
                    lighter: colors.gray['700'],
                    "DEFAULT": colors.gray['800'],
                    darker: colors.gray['900']
                },
                secondary: {
                    lighter: colors.gray['400'],
                    "DEFAULT": colors.gray['600'],
                    darker: colors.gray['800']
                }
            },
            backgroundColor: {
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                container: {
                    lighter: colors.white,
                    "DEFAULT": colors.neutral['50'],
                    darker: colors.neutral['100']
                }
            },
            borderColor: {
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                container: {
                    lighter: colors.neutral['100'],
                    "DEFAULT": '#e7e7e7',
                    darker: '#b6b6b6'
                }
            },
            minHeight: {
                a11y: spacing["11"],
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh'
            },
            maxHeight: {
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh'
            },
            container: {
                center: true,
                padding: spacing["6"]
            }
        }
    },
    corePlugins: {
        preflight: false,
        container: false,
    },
};
