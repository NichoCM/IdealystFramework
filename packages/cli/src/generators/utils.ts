import fs from 'fs-extra';
import path from 'path';
import { spawn } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import validatePackageName from 'validate-npm-package-name';
import { TemplateData } from '../types';

export function validateProjectName(name: string): boolean {
  const validation = validatePackageName(name);
  return validation.validForNewPackages;
}

export function createPackageName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

export async function updateWorkspacePackageJson(projectName: string, directory: string): Promise<void> {
  // Look for package.json in the directory to see if we're in a workspace
  const packageJsonPath = path.join(directory, 'package.json');
  
  if (await fs.pathExists(packageJsonPath)) {
    try {
      const packageJson = await fs.readJSON(packageJsonPath);
      
      // Check if this is a workspace (has workspaces property)
      if (packageJson.workspaces && Array.isArray(packageJson.workspaces)) {
        // Add the new project to workspaces if not already present
        if (!packageJson.workspaces.includes(projectName)) {
          packageJson.workspaces.push(projectName);
          await fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 });
          console.log(chalk.green(`✅ Added ${projectName} to workspace configuration`));
        }
      }
    } catch (error) {
      // Silently ignore if we can't read/write package.json
      console.log(chalk.yellow(`⚠️  Could not update workspace configuration: ${error instanceof Error ? error.message : 'Unknown error'}`));
    }
  }
}

export async function copyTemplate(templatePath: string, destPath: string, data: TemplateData): Promise<void> {
  const spinner = ora(`Copying template files...`).start();
  
  try {
    await fs.ensureDir(destPath);
    await fs.copy(templatePath, destPath, {
      filter: (src) => {
        const relativePath = path.relative(templatePath, src);
        return !relativePath.includes('node_modules') && !relativePath.includes('.git');
      }
    });
    
    // Process template files
    await processTemplateFiles(destPath, data);
    
    spinner.succeed('Template files copied successfully');
  } catch (error) {
    spinner.fail('Failed to copy template files');
    throw error;
  }
}

export async function processTemplateFiles(dir: string, data: TemplateData): Promise<void> {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      await processTemplateFiles(filePath, data);
    } else if (file.endsWith('.json') || file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
      await processTemplateFile(filePath, data);
    }
  }
}

export async function processTemplateFile(filePath: string, data: TemplateData): Promise<void> {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    
    // Replace template variables
    content = content.replace(/\{\{projectName\}\}/g, data.projectName);
    content = content.replace(/\{\{packageName\}\}/g, data.packageName);
    content = content.replace(/\{\{version\}\}/g, data.version);
    content = content.replace(/\{\{description\}\}/g, data.description);
    
    await fs.writeFile(filePath, content);
  } catch (error) {
    // Skip files that can't be processed
    console.warn(chalk.yellow(`Warning: Could not process template file ${filePath}`));
  }
}

export async function installDependencies(projectPath: string, skipInstall: boolean = false): Promise<void> {
  if (skipInstall) {
    console.log(chalk.yellow('Skipping dependency installation'));
    return;
  }
  
  const spinner = ora('Installing dependencies...').start();
  
  try {
    await runCommand('yarn', ['install'], { cwd: projectPath });
    spinner.succeed('Dependencies installed successfully');
  } catch (error) {
    spinner.fail('Failed to install dependencies with yarn');
    console.log(chalk.yellow('You can install dependencies manually by running:'));
    console.log(chalk.white('  cd ' + path.basename(projectPath)));
    console.log(chalk.white('  yarn install'));
    console.log(chalk.white('  # or alternatively:'));
    console.log(chalk.white('  npm install'));
  }
}

export function runCommand(command: string, args: string[], options: { cwd: string }): Promise<void> {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      cwd: options.cwd,
      stdio: 'inherit',
      shell: true
    });
    
    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
    
    process.on('error', (error) => {
      reject(error);
    });
  });
}

export function getTemplateData(projectName: string, description?: string): TemplateData {
  return {
    projectName,
    packageName: createPackageName(projectName),
    version: '1.0.0',
    description: description || `A new Idealyst project: ${projectName}`
  };
} 