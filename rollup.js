var rollup  = require('rollup');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify  = require('rollup-plugin-uglify');

module.exports = {
    entry: 'app/boot-aot.js',
    dest: 'dist/build-aot.js',
    sourceMap: true,
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: 'node_modules/rxjs/**'
        }),
        uglify()
    ]
};

