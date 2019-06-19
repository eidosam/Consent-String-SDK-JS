module.exports = {
    mode: 'production',
    entry: './src/bundle.js',
    output: {
        path: __dirname + '/bundle',
        filename: 'consent-string-sdk.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    }
};
