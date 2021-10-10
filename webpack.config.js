const path = require("path");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: { path: path.join(__dirname, "dist"), filename: "[name].bundle.js", chunkFilename: "[id].[fullhash:8].js" },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
                use: ["file-loader?name=[name].[ext]"],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        type: 'http',
        allowedHosts: true,
        compress: true,
        port: 9000,
    },
};