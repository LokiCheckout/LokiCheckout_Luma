<?php declare(strict_types=1);

namespace Yireo\LokiCheckoutLuma\Console\Command;

use Composer\Console\Input\InputArgument;
use Magento\Framework\App\Filesystem\DirectoryList;
use Magento\Framework\Component\ComponentRegistrar;
use Magento\Framework\Filesystem\Directory\ReadFactory as DirectoryReadFactory;
use Magento\Framework\Filesystem\File\ReadFactory as FileReadFactory;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportCssCommand extends Command
{
    public function __construct(
        private ComponentRegistrar $componentRegistrar,
        private DirectoryList $directoryList,
        private DirectoryReadFactory $directoryReadFactory,
        private FileReadFactory $fileReadFactory,
        $name = null
    ) {
        parent::__construct($name);
    }

    protected function configure()
    {
        $this->setName('yireo:loki-checkout-luma:import-css');
        $this->setDescription('Return CSS from specified modules');
        $this->addArgument('path', InputArgument::REQUIRED, 'Path definition');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $directoryRead = $this->directoryReadFactory->create('/');

        $pathDefinition = (string)$input->getArgument('path');
        if (false === str_contains($pathDefinition, '::')) {
            $output->writeln('/** Invalid module definition: "'.$pathDefinition.'" */');
            return Command::FAILURE;
        }

        list($moduleName, $moduleRelativePath) = explode('::', $pathDefinition);

        $modulePath = $this->componentRegistrar->getPath(ComponentRegistrar::MODULE, $moduleName);
        if (empty($modulePath)) {
            $output->writeln('/** Module "'.$moduleName.'" not found */');
            return Command::FAILURE;
        }

        if (false === str_starts_with($modulePath, '/')) {
            $modulePath = $this->directoryList->getRoot().$modulePath;
        }

        if (false === $directoryRead->isDirectory($modulePath)) {
            $output->writeln('/** Module path for "'.$moduleName.'" not found */');
            return Command::FAILURE;
        }


        $path = $modulePath.'/'.$moduleRelativePath;
        if (false === $directoryRead->isFile($path)) {
            $output->writeln('/** Module path "'.$path.'" does not exist */');
            return Command::FAILURE;
        }

        $css = $this->fileReadFactory->create($path, 'file')->readAll();
        $output->writeln($css);

        return Command::SUCCESS;
    }
}
