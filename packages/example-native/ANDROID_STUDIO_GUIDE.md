# Running Gradle Tasks in Android Studio

## Method 1: Gradle Tool Window (Recommended)

### Opening the Gradle Tool Window
1. **Open your project** in Android Studio (`packages/example-native/android/`)
2. **View** → **Tool Windows** → **Gradle**
3. Or click the **Gradle elephant icon** on the right sidebar

### Available Tasks
The Gradle window shows a tree structure:
```
📁 ExampleNative
  📁 Tasks
    📁 android
      - assembleDebug
      - assembleRelease
    📁 build
      - build
      - clean
      - rebuild
    📁 install
      - installDebug
      - installRelease
    📁 other
      - bundleDebug
      - bundleRelease
```

### Common Tasks

#### **Clean Build**
- Expand **ExampleNative** → **Tasks** → **build**
- **Double-click** `clean`
- Equivalent to: `./gradlew clean`

#### **Build Debug APK**
- Expand **ExampleNative** → **Tasks** → **android**
- **Double-click** `assembleDebug`
- Equivalent to: `./gradlew assembleDebug`

#### **Install on Device**
- Expand **ExampleNative** → **Tasks** → **install**
- **Double-click** `installDebug`
- Equivalent to: `./gradlew installDebug`

## Method 2: Build Menu

### Build APK
- **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
- Equivalent to: `./gradlew assembleDebug`

### Clean Project
- **Build** → **Clean Project**
- Equivalent to: `./gradlew clean`

### Rebuild Project
- **Build** → **Rebuild Project**
- Equivalent to: `./gradlew clean build`

## Method 3: Run Configurations

### Create Run Configuration
1. **Run** → **Edit Configurations...**
2. **Click +** → **Gradle**
3. **Name**: "Clean Build"
4. **Gradle project**: Select your module
5. **Tasks**: `clean assembleDebug`
6. **Click OK**

### Run Configuration
- **Run** → **Run 'Clean Build'**
- Or use the **play button** in toolbar

## Method 4: Terminal in Android Studio

### Built-in Terminal
1. **View** → **Tool Windows** → **Terminal**
2. Navigate to android folder: `cd android`
3. Run: `./gradlew clean`

## Method 5: Build Variants

### Switch Build Types
1. **View** → **Tool Windows** → **Build Variants**
2. Change **Active Build Variant**:
   - `debug` - Development build
   - `release` - Production build

## Common Workflows

### **Fresh Build (Clean + Rebuild)**
```
Method 1: Gradle Window
1. Double-click `clean`
2. Wait for completion
3. Double-click `assembleDebug`

Method 2: Build Menu
1. Build → Clean Project
2. Build → Rebuild Project
```

### **Install on Device**
```
Method 1: Gradle Window
1. Double-click `installDebug`

Method 2: Run Button
1. Click green ▶️ button
2. Select your device/emulator
```

### **Release Build**
```
Method 1: Gradle Window
1. Tasks → android → assembleRelease

Method 2: Build Menu
1. Build → Generate Signed Bundle/APK
2. Follow signing wizard
```

## Troubleshooting

### **Task Failed**
- Check **Build** tab at bottom for detailed error logs
- Same information as command line output

### **Sync Issues**
- **File** → **Sync Project with Gradle Files**
- Equivalent to: `./gradlew sync`

### **Cache Issues**
- **File** → **Invalidate Caches and Restart**
- More aggressive than `./gradlew clean`

## React Native Specific

### **Metro Bundler Integration**
1. **Run React Native app** from Android Studio
2. **Run** → **Run 'app'** (or press ▶️)
3. This automatically:
   - Starts Metro bundler
   - Builds APK with `assembleDebug`
   - Installs and launches app

### **Development Workflow**
1. **Start Metro**: Terminal → `npx react-native start`
2. **Build & Install**: Android Studio → Run button
3. **Fast Refresh**: Enabled automatically
4. **Reload**: Shake device or Ctrl+M

## Advantages of Android Studio

✅ **Visual interface** - No command line needed
✅ **Integrated logs** - Build output in IDE
✅ **Device management** - AVD Manager built-in
✅ **Debugging tools** - Integrated debugger
✅ **Code completion** - For gradle files
✅ **Sync detection** - Auto-prompts when gradle files change

## Command Line Equivalents

| Android Studio Action | Command Line |
|----------------------|--------------|
| Clean Project | `./gradlew clean` |
| Build APK | `./gradlew assembleDebug` |
| Install Debug | `./gradlew installDebug` |
| Build Release | `./gradlew assembleRelease` |
| Run Tests | `./gradlew test` |
| List Tasks | `./gradlew tasks` | 