const { spacing, fontSize } = require("./tailwind.helper");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Base module
        "../../magento2-loki-checkout/view/frontend/templates/**/*.{xml,phtml}",
        // This module overides
        "../view/frontend/templates/**/*.{xml,phtml}",
    ],
    safelist: [
        "loki-checkout",
        {
            pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
        },
    ],
    important: ":where(.loki-checkout)",
    theme: {
        spacing,
        fontSize,
    },
    corePlugins: {
        preflight: false,
        container: false,
    },
};
