module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['react-native-unistyles/plugin', {
      root: 'src',
    }],
  ],
}; 