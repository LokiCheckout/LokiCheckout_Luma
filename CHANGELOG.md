# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.16] - 06 October 2025
### Fixed
- Better aligning of input button with shipping methods in JS
- Fix wrong margin of shipping method items under Luma
- Fix hover on payment method item to cause little bump in demo-module
- Remove dep with `Yireo_HyvaThemeAutoRegistration`

## [1.0.15] - 30 September 2025
### Fixed
- Fix styling of list items 

## [1.0.14] - 30 September 2025
### Fixed
- Add margin-top to messages to look good under Luma
- Remove fixed positioning of messages

## [1.0.13] - 29 September 2025
### Fixed
- Skip adding content of CSS of Luma module itself, because it is the start of things anyway
- Make sure to only include one single CSS file per module
- Fix Tailwind build under Luma by reusing Hyva config partially

## [1.0.12] - 27 September 2025
### Fixed
- Allow @import of Tailwind CSS within Luma build (which currently leads into other issues)
- Allow detected Magento root via env var `MAGENTO_ROOT`
- Update README

## [1.0.11] - 24 September 2025
### Fixed
- Rename magentoModuleImport to magento-module-import

## [1.0.10] - 16 September 2025
### Fixed
- Move page messages to fixed position in Luma

## [1.0.9] - 10 September 2025
### Fixed
- Recursively find Magento root

## [1.0.8] - 28 August 2025
### Fixed
- Add `NODE_ENV` to package.json scripts

## [1.0.7] - 28 August 2025
### Fixed
- Cleanup Tailwind whitelist

## [1.0.6] - 28 August 2025
### Fixed
- Add loki-col-span class to Luma theme
- Add CI files
- Replace yireo/opensearch with yireo/opensearch-dummy in Gitlab CI

## [1.0.5] - 26 August 2025
### Fixed
- 23db237 Add GitLab CI files

## [1.0.4] - 21 August 2025
### Fixed
- Fix duplicate import
- Declare used PHP namespaces
- Document latest version of template

## [1.0.3] - 18 August 2025
### Fixed
- Lower requirements to PHP 8.1

## [1.0.2] - 06 August 2025
### Fixed
- Lower PHP requirement to PHP 8.2+

## [1.0.1] - 01 August 2025
### Fixed
- Add missing `$css` wrapper

## [1.0.0] - 22 July 2025
### Fixed
- Rename PHP namespace from `Yireo_Loki*` to `Loki*`
- Rename composer package from `yireo/magento2-loki*` to `loki/magento2*`
- Bump loki/magento2-components to major 2.0
- Bump `LokiCheckout_Core` to 2.0.0

## [0.0.15] - 08 July 2025
### Fixed
- Update MODULE.json
- Update composer category
- Generate new MODULE.json with simple test count
- Recommend skinny package
- Allow PHP 8.4 in CI
- Move removal of minicart to LumaSkinny module

## [0.0.14] - 25 April 2025
### Fixed
- New build file

## [0.0.13] - 25 April 2025
### Fixed
- Attempt fix exclusion

## [0.0.12] - 25 April 2025
### Fixed
- Duplicate safelisted order and grid classes to Luma

## [0.0.11] - 25 April 2025
### Fixed
- Allow upgrading to LokiFieldComponents and LokiCheckout 1.0
- Make loader icon in fields depend on Alpine and activate only after configurable timeout

## [0.0.10] - 10 April 2025
### Fixed
- Remove obsolete commands
- Rely on app/etc/loki-checkout.json for building PostCSS and Tailwind
- Switch Tailwind build to using new file app/etc/loki-checkout.json

## [0.0.9] - 09 April 2025
### Fixed
- Either return empty object or empty function
- Remove checkout JS but only in the checkout
- Fix look and feel of demo module
- Restructure loki classes for Luma
- Formatting
- Handle error better
- Fix module path in Taildwind Luma

## [0.0.8] - 04 April 2025
### Fixed
- Move module-path command from Luma module to core module
- Wrap existing LESS in when-common

## [0.0.7] - 11 March 2025
### Fixed
- Fix issue with grid CSS classes

## [0.0.6] - 22 February 2025
### Fixed
-  Change deps
-  Rip more Luma JS
-  Rip more scripts from Luma

## [0.0.5] - 13 February 2025
### Fixed
- Skip Hyva compilation because this is not meant for Hyva

## [0.0.4] - 3 February 2025
### Fixed
- Bump

## [0.0.3] - 3 February 2025
### Fixed
- Lower composer dep to 2.2

## [0.0.2] - 21 January 2025
### Fixed
- Add proper dependencies in composer.json and module.xml

## [0.0.1] - 21 January 2025
- Initial release
