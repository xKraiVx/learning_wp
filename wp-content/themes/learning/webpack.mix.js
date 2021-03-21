let mix = require('laravel-mix');

mix
    .sourceMaps(true, 'source-map')
    .js('app/js/app.js', 'assets/js')
    .sass('app/scss/style.scss', 'assets/css')
    .copyDirectory('app/custom_js', 'assets/custom_js')
    .copyDirectory('app/fonts', 'assets/fonts')
    .copyDirectory('app/images', 'assets/images')
    .options({
        processCssUrls: false
    })
    .browserSync({
        proxy: false,
        server: {
            baseDir: './'
        },
        files: [
            'assets/js/*.js',
            'assets/css/*.css',
        ]
    });