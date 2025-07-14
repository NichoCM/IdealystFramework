#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { generateProject } from './generators';
import { ProjectType } from './types';

const program = new Command();

program
  .name('idealyst')
  .description('CLI tool for generating Idealyst Framework projects')
  .version('1.0.1');

program
  .command('create <project-name>')
  .description('Create a new Idealyst project')
  .option('-t, --type <type>', 'Project type: native, web, or shared', 'native')
  .option('-d, --directory <directory>', 'Output directory', '.')
  .option('--skip-install', 'Skip installing dependencies')
  .action(async (projectName: string, options: {
    type: string;
    directory: string;
    skipInstall?: boolean;
  }) => {
    const validTypes = ['native', 'web', 'shared'];
    
    if (!validTypes.includes(options.type)) {
      console.error(chalk.red(`Invalid project type: ${options.type}`));
      console.error(chalk.yellow(`Valid types are: ${validTypes.join(', ')}`));
      process.exit(1);
    }

    try {
      await generateProject({
        name: projectName,
        type: options.type as ProjectType,
        directory: options.directory,
        skipInstall: options.skipInstall || false
      });
      
      console.log(chalk.green(`✨ Successfully created ${projectName}!`));
      console.log(chalk.blue(`📁 Project created in: ${options.directory}/${projectName}`));
      
      if (options.type === 'native') {
        console.log(chalk.yellow('\n📱 Next steps for React Native:'));
        console.log(chalk.white('  cd ' + projectName));
        console.log(chalk.white('  yarn android  # or yarn ios'));
      } else if (options.type === 'web') {
        console.log(chalk.yellow('\n🌐 Next steps for React Web:'));
        console.log(chalk.white('  cd ' + projectName));
        console.log(chalk.white('  yarn dev'));
      } else {
        console.log(chalk.yellow('\n📦 Next steps for Shared Library:'));
        console.log(chalk.white('  cd ' + projectName));
        console.log(chalk.white('  yarn build'));
      }
    } catch (error) {
      console.error(chalk.red('❌ Error creating project:'), error);
      process.exit(1);
    }
  });

program
  .command('init')
  .description('Initialize a new Idealyst monorepo workspace')
  .option('-d, --directory <directory>', 'Output directory', '.')
  .option('--skip-install', 'Skip installing dependencies')
  .action(async (options: {
    directory: string;
    skipInstall?: boolean;
  }) => {
    try {
      await generateProject({
        name: 'idealyst-workspace',
        type: 'workspace',
        directory: options.directory,
        skipInstall: options.skipInstall || false
      });
      
      console.log(chalk.green('✨ Successfully initialized Idealyst workspace!'));
      console.log(chalk.blue(`📁 Workspace created in: ${options.directory}/idealyst-workspace`));
      console.log(chalk.yellow('\n🚀 Next steps:'));
      console.log(chalk.white('  cd idealyst-workspace'));
      console.log(chalk.white('  idealyst create my-app --type native'));
      console.log(chalk.white('  idealyst create my-web-app --type web'));
    } catch (error) {
      console.error(chalk.red('❌ Error initializing workspace:'), error);
      process.exit(1);
    }
  });

program.parse(); 