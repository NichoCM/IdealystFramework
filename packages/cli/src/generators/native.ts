import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { GenerateProjectOptions } from '../types';
import { validateProjectName, copyTemplate, installDependencies, getTemplateData, updateWorkspacePackageJson } from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateNativeProject(options: GenerateProjectOptions): Promise<void> {
  const { name, directory, skipInstall } = options;
  
  if (!validateProjectName(name)) {
    throw new Error(`Invalid project name: ${name}`);
  }
  
  console.log(chalk.blue(`📱 Creating React Native project: ${name}`));
  
  const projectPath = path.join(directory, name);
  const templatePath = path.join(__dirname, '..', 'templates', 'native');
  
  const templateData = getTemplateData(name, `React Native app built with Idealyst Framework`);
  
  await copyTemplate(templatePath, projectPath, templateData);
  await installDependencies(projectPath, skipInstall);
  await updateWorkspacePackageJson(name, directory);
  
  console.log(chalk.green('✅ React Native project created successfully!'));
  console.log(chalk.blue('📋 Project includes:'));
  console.log(chalk.white('  • React Native 0.80.1'));
  console.log(chalk.white('  • Idealyst Components'));
  console.log(chalk.white('  • Idealyst Navigation'));
  console.log(chalk.white('  • Idealyst Theme'));
  console.log(chalk.white('  • TypeScript configuration'));
  console.log(chalk.white('  • Metro configuration'));
  console.log(chalk.white('  • Babel configuration'));
} 