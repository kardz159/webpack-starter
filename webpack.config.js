//Carga los archivos de otro paquete
const HtmlWebPack = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                },
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
        ]
    },

    optimization: {

    },

    plugins: [
       new HtmlWebPack({
           title: 'Mi webpack',
           template: './src/index.html'
       })
    ]
}