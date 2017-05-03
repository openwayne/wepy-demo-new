var prod = process.env.NODE_ENV === 'production';

module.exports = {
    'wpyExt': '.wpy',
    'compilers': {
        less: {
            'compress': false
        },
        /*sass: {
            'outputStyle': 'compressed'
        },*/
        babel: {
            'presets': [
                'es2015',
                'stage-1'
            ],
            'plugins': [
                'transform-export-extensions',
                'syntax-export-extensions'
            ]
        }
    },
    'plugins': {

    }
};

if (prod) {
    // 压缩sass
    //module.exports.compilers['sass'] = {'outputStyle': 'compressed'};

    // 压缩less
    module.exports.compilers['less'] = {'compress': false};
    module.exports.compilers['js'] = {'compress': false};

    // 压缩js
    module.exports.plugins = {
        'uglifyjs': {
            filter: /\.js$/,
            config: {
            }
        },
        'imagemin': {
            filter: /\.(jpg|png|jpge)$/,
            config: {
                'jpg': {
                    quality: 80
                },
                'png': {
                    quality: 80
                }
            }
        }
    };
}

