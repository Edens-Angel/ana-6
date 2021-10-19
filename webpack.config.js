const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const BUILD_DIR = path.resolve(__dirname, '/public', '/bundle')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: { path: BUILD_DIR, filename: 'bundle/[name].bundle.js', chunkFilename: '[id].[fullhash:8].js' },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        'noEmit': false,
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ['css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg|ico|mp4)$/,
                use: ['file-loader?name=[name].[ext]'],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.tsx')
        }),
        new WebpackPwaManifest({
            short_name: "Anniversario mi amor",
            name: "Anniversario con mi amor",
            icons: [
                {
                    src: path.resolve('public', 'favicon.ico'),
                    sizes: "64x64 32x32 24x24 16x16",
                    type: "image/x-icon"
                },
                {
                    src: path.resolve('public', 'logo192.png'),
                    type: "image/png",
                    sizes: "192x192"
                },
                {
                    src: path.resolve('public', 'logo512.png'),
                    type: "image/png",
                    sizes: "512x512"
                }
            ],
            start_url: ".",
            display: "standalone",
            theme_color: "#000000",
            background_color: "#ffffff"
        })
    ]
};