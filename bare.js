// rollup.config.js

import buble from 'rollup-plugin-buble'
import minify from 'rollup-plugin-minify'

export default {
  entry: './src/moverlay.js',
  moduleName: 'moverlay_bare',
  plugins:[
    buble(),
    minify({iife: 'dist/moverlay.bare.min.js'})
  ],
  external:[
    'mithril'
  ],
  globals:{
    'mithril': 'm'
  },
  targets: [
    { format: 'es',   dest: 'dist/moverlay.bare.es.js'},
    { format: 'cjs',  dest: 'dist/moverlay.bare.cjs.js'},
    { format: 'amd',  dest: 'dist/moverlay.bare.amd.js'},
    { format: 'iife', dest: 'dist/moverlay.bare.iife.js'},
  ]
}
