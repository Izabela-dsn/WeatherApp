const { plugins } = require('@react-native-community/eslint-config')

module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: ['module: react-native-dotenv']
    }
}