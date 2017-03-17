var path = require('path');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/scripts')
    },
    watch: true
};

module.exports = {
    entry: './src/sass/app.scss',
    output: {
      filename: 'app.css',
      path: path.resolve(__dirname, 'dist/css')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        }],

    }
}
