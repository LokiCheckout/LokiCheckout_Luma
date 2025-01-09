<?php declare(strict_types=1);

namespace Yireo\LokiCheckoutLuma\Console\Command;

use Composer\Console\Input\InputArgument;
use Magento\Framework\App\Filesystem\DirectoryList;
use Magento\Framework\Component\ComponentRegistrar;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ModulePathCommand extends Command
{
    public function __construct(
        private ComponentRegistrar $componentRegistrar,
        private DirectoryList $directoryList,
        $name = null
    ) {
        parent::__construct($name);
    }

    protected function configure()
    {
        $this->setName('yireo:loki-checkout-luma:module-path');
        $this->setDescription('Return the module path');
        $this->addArgument('module', InputArgument::REQUIRED, 'Module name');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $moduleName = (string)$input->getArgument('module');
        $modulePath = $this->componentRegistrar->getPath(ComponentRegistrar::MODULE, $moduleName);

        if (false === preg_match('/^\//', $modulePath)) {
            $modulePath = $this->directoryList->getRoot() . $modulePath;
        }

        $output->writeln($modulePath);

        return Command::SUCCESS;
    }
}
