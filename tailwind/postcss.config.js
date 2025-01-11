module.exports = {
    plugins: [
        require("./postcss-plugin/magento-import"),
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        require("postcss-preset-env"),
    ],
};
