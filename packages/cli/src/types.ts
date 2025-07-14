export type ProjectType = 'native' | 'web' | 'shared' | 'workspace';

export interface GenerateProjectOptions {
  name: string;
  type: ProjectType;
  directory: string;
  skipInstall: boolean;
}

export interface TemplateData {
  projectName: string;
  packageName: string;
  version: string;
  description: string;
} 