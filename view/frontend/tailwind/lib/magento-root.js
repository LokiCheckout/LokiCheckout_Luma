const fs = require('fs');
const configResolver = require('./config');
const path = require('path');

function getMagentoRoot(startDir = process.cwd()) {
    let dir = fs.existsSync(startDir) ? fs.realpathSync(startDir) : path.resolve(startDir);

    const diXmlPath = path.join(dir, 'app', 'etc', 'di.xml');
    if (fs.existsSync(diXmlPath)) {
        return dir;
    }

    const parent = path.dirname(dir);
    if (parent === dir) {
        return null;
    }

    return getMagentoRoot(parent);
}

module.exports = (configFile) => {
    const config = configResolver(configFile);

    let magentoRoot = getMagentoRoot();

    if (!magentoRoot) {
        console.error('No Magento root defined');
        process.exit();
    }

    if (!fs.existsSync(magentoRoot)) {
        console.error('Non existing Magento root: ' + magentoRoot);
        process.exit();
    }

    return magentoRoot;
}

