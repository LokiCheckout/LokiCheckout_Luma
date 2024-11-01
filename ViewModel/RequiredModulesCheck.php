<?php declare(strict_types=1);

namespace Yireo\LokiCheckoutLuma\ViewModel;

use Magento\Framework\Module\Manager as ModuleManager;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class RequiredModulesCheck implements ArgumentInterface
{
    public function __construct(
        private ModuleManager $moduleManager,
    ) {
    }

    public function getErrors(): array
    {
        $errors = [];
        $moduleName = 'Magewirephp_MagewireRequireJs';
        if (false === $this->moduleManager->isEnabled($moduleName)) {
            $errors[] = __('The module "%1" is required but not enabled', $moduleName);
        }

        return $errors;
    }
}
