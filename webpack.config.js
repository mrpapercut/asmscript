const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractSass = new MiniCssExtractPlugin({
    filename: '[name].css'
});

module.exports = function(env, argv) {
    return {
        entry: {
            main: './src/js/main.js'
        },
        mode: env && env.production ? 'production' : 'development',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            chunkFilename: '[name].chunk.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(woff2|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }]
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        plugins: [
            extractSass
        ]
    };
};
