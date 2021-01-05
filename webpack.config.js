const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
const webpack = require('webpack')

module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }, 
            {
               test: /\.html$/,
               use: [
                   {
                       loader: "html-loader"
                   }
               ]
            }, 
            {
                test: /\.(png|jpe|svg|jpe?g|gif)$/i, 
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }, 
            {
                test: /\.s[ac]ss$/i, 
                use: [MiniCss.loader, "css-loader", "sass-loader"]
            }
        ]
    }, 

    plugins: [
        new HtmlPlugin({
            filename: "index.html", 
            template: "./public/index.html"
        }), 
        new MiniCss(), 
        new webpack.DefinePlugin({
           "process.env" : {
               "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
           }
        })
    ], 

    devServer: {
        historyApiFallback: true, 
        port: 3000
    }

}