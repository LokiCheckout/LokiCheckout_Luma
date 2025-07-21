<?php declare(strict_types=1);

namespace LokiCheckout\Luma\ViewModel;

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
        $requiredModules = ['LokiCheckout_Core'];
        foreach ($requiredModules as $requiredModule) {
            if (false === $this->moduleManager->isEnabled($requiredModule)) {
                $errors[] = __('The module "%1" is required but not enabled', $requiredModule);
            }
        }

        return $errors;
    }
}
