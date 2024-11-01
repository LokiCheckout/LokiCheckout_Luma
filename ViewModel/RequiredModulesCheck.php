<?php declare(strict_types=1);

namespace Yireo\LokiCheckoutLuma\ViewModel;

use Magento\Framework\Message\Manager as MessageManager;
use Magento\Framework\Module\Manager as ModuleManager;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class RequiredModulesCheck implements ArgumentInterface
{
    public function __construct(
        private ModuleManager $moduleManager,
        private MessageManager $messageManager
    ) {
    }

    public function __invoke()
    {
        $moduleName = 'Magewirephp_MagewireRequireJs';
        if (false === (bool)$this->moduleManager->isEnabled($moduleName)) {
            $message = __('The module "%1" is required but not enabled', $moduleName);
            $this->messageManager->addWarning($message);
        }
    }
}
