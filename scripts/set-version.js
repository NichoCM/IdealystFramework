#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get version from command line argument
const newVersion = process.argv[2];

if (!newVersion) {
  console.error('Usage: node scripts/set-version.js <version>');
  console.error('Example: node scripts/set-version.js 1.2.0');
  process.exit(1);
}

// Validate version format (basic semantic versioning)
const versionRegex = /^\d+\.\d+\.\d+(-[\w.-]+)?$/;
if (!versionRegex.test(newVersion)) {
  console.error('Invalid version format. Use semantic versioning (e.g., 1.2.0)');
  process.exit(1);
}

console.log(`Setting version to ${newVersion} across all packages...`);

// Update root package.json first
const rootPackageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
rootPackageJson.version = newVersion;
fs.writeFileSync('package.json', JSON.stringify(rootPackageJson, null, 2) + '\n');
console.log('Updated root package.json');

// Paths to update
const packagePaths = [
  'packages/theme/package.json',
  'packages/components/package.json',
  'packages/navigation/package.json',
  'examples/example-native/package.json',
  'examples/example-web/package.json'
];

// Function to update version in package.json
function updatePackageVersion(packagePath) {
  if (!fs.existsSync(packagePath)) {
    console.log(`Skipping ${packagePath} - file not found`);
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Update the version
  packageJson.version = newVersion;
  
  // Update dependencies to use the new version
  const idealystPackages = ['@idealyst/theme', '@idealyst/components', '@idealyst/navigation'];
  
  ['dependencies', 'peerDependencies', 'devDependencies'].forEach(depType => {
    if (packageJson[depType]) {
      idealystPackages.forEach(pkg => {
        if (packageJson[depType][pkg]) {
          // Keep the caret prefix for external dependencies
          if (packagePath.includes('examples/')) {
            packageJson[depType][pkg] = `^${newVersion}`;
          } else {
            // For internal packages, use workspace protocol
            packageJson[depType][pkg] = `workspace:^${newVersion}`;
          }
        }
      });
    }
  });
  
  // Write the updated package.json
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Updated ${packagePath}`);
}

// Update all packages
packagePaths.forEach(updatePackageVersion);

console.log(`Version ${newVersion} set successfully across all packages!`);
console.log('You can now commit these changes and publish the packages.'); 