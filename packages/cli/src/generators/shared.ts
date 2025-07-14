import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { GenerateProjectOptions } from '../types';
import { validateProjectName, copyTemplate, installDependencies, getTemplateData, updateWorkspacePackageJson } from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateSharedLibrary(options: GenerateProjectOptions): Promise<void> {
  const { name, directory, skipInstall } = options;
  
  if (!validateProjectName(name)) {
    throw new Error(`Invalid project name: ${name}`);
  }
  
  console.log(chalk.blue(`📦 Creating shared library: ${name}`));
  
  const projectPath = path.join(directory, name);
  const templatePath = path.join(__dirname, '..', 'templates', 'shared');
  
  const templateData = getTemplateData(name, `Shared library built with Idealyst Framework`);
  
  await copyTemplate(templatePath, projectPath, templateData);
  await installDependencies(projectPath, skipInstall);
  await updateWorkspacePackageJson(name, directory);
  
  console.log(chalk.green('✅ Shared library created successfully!'));
  console.log(chalk.blue('📋 Project includes:'));
  console.log(chalk.white('  • Cross-platform components'));
  console.log(chalk.white('  • Idealyst Theme integration'));
  console.log(chalk.white('  • TypeScript configuration'));
  console.log(chalk.white('  • Rollup build system'));
  console.log(chalk.white('  • React & React Native support'));
} 