module.exports = {
    plugins: [
        require("./postcss-plugin/magento-module-import"),
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        require("postcss-preset-env"),
    ],
};
