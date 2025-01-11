const fs = require('fs');
const configResolver = require('./config');

module.exports = (configFile) => {
    const config = configResolver(configFile);

    let magentoRoot = config.magentoRoot;
    if (!magentoRoot) {
        magentoRoot = '../../../../';
    }

    if (!magentoRoot) {
        console.error('No Magento root defined');
        process.exit();
    }

    if (!fs.existsSync(magentoRoot)) {
        console.error('Non existing Magento root: ' + magentoRoot);
        process.exit();
    }

    if (!fs.existsSync(magentoRoot + '/app/etc/env.php')) {
        console.error('Magento root does not seem to contain Magento: ' + magentoRoot);
        process.exit();
    }

    return magentoRoot;
}
