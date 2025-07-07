# Local Development Setup for NitroModules & Unistyles v3

## Prerequisites

### 1. Install Java 17+ JDK
```bash
# macOS (using Homebrew)
brew install openjdk@17

# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-17-jdk

# Windows
# Download from: https://adoptium.net/temurin/releases/
```

### 2. Install Android Studio & SDK
1. Download Android Studio from https://developer.android.com/studio
2. Install with default settings
3. Open Android Studio → SDK Manager
4. Install:
   - Android SDK Platform 34
   - Android SDK Build-Tools 34.0.0
   - Android SDK Command-line Tools
   - Android Emulator
   - Android SDK Platform-Tools

### 3. Set Environment Variables
```bash
# Add to ~/.bashrc, ~/.zshrc, or ~/.profile

# Java
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64  # Linux
export JAVA_HOME=/opt/homebrew/opt/openjdk@17         # macOS
export JAVA_HOME="C:\Program Files\Java\jdk-17"      # Windows

# Android
export ANDROID_HOME=$HOME/Android/Sdk                # Linux/macOS
export ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk       # Windows
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 4. Verify Installation
```bash
java -version
javac -version
adb version
emulator -list-avds
```

## Project Setup

### 1. Clone & Install
```bash
git clone <your-repo>
cd packages/example-native
yarn install
```

### 2. Enable Full Unistyles
```bash
# 1. Enable Babel plugin
# Edit babel.config.js - uncomment Unistyles plugin

# 2. Switch to full app
# Edit index.js - switch from App.fallback to App
```

### 3. Build Native Modules
```bash
# Clean build
cd android && ./gradlew clean && cd ..

# Start Metro
npx react-native start --reset-cache

# Build for Android
npx react-native run-android

# Build for iOS (macOS only)
cd ios && pod install && cd ..
npx react-native run-ios
```

## Troubleshooting

### Common Issues

1. **"NitroModules not found"**
   - Ensure New Architecture is enabled (`newArchEnabled=true`)
   - Clean and rebuild: `cd android && ./gradlew clean`

2. **"JAVA_HOME not set"**
   - Verify Java installation: `java -version`
   - Check environment variables

3. **"adb not found"**
   - Add Android SDK tools to PATH
   - Restart terminal after setting env vars

4. **Build fails**
   - Clean Metro cache: `npx react-native start --reset-cache`
   - Clean Android build: `cd android && ./gradlew clean`
   - Reinstall dependencies: `yarn install`

## Development Workflow

### Full Unistyles (Local)
```javascript
// babel.config.js
plugins: [
  ['react-native-unistyles/plugin', {
    root: 'src'
  }]
]

// index.js
import App from './src/App';
```

### Fallback (Docker)
```javascript
// babel.config.js
plugins: [
  // ['react-native-unistyles/plugin', {
  //   root: 'src'
  // }]
]

// index.js
import App from './src/App.fallback';
```

## Testing

### Android Emulator
```bash
# List available emulators
emulator -list-avds

# Start emulator
emulator @<emulator-name>

# Or use Android Studio → AVD Manager
```

### Physical Device
```bash
# Enable Developer Options & USB Debugging
adb devices

# Should show your device
npx react-native run-android
```

## Performance Tips

1. **Use SSD** for Android SDK and project files
2. **Allocate RAM** to Android emulator (8GB+ recommended)
3. **Enable hardware acceleration** in BIOS/UEFI
4. **Use release builds** for performance testing 