// rollup.config.js

import buble from 'rollup-plugin-buble'
import minify from 'rollup-plugin-minify'

export default {
  entry: './src/moverlay.js',
  moduleName: 'moverlay',
  plugins:[
    buble(),
    minify({iife: 'dist/moverlay.min.js'})
  ],
  external:[
    'mithril'
  ],
  globals:{
    'mithril': 'm'
  },
  targets: [
    { format: 'es',   dest: 'dist/moverlay.es.js'   },
    { format: 'cjs',  dest: 'dist/moverlay.cjs.js'  },
    { format: 'amd',  dest: 'dist/moverlay.amd.js'  },
    { format: 'iife', dest: 'dist/moverlay.iife.js' },
  ]
}
