// rollup.config.js

import buble from 'rollup-plugin-buble'
import minify from 'rollup-plugin-minify'
import fs from 'fs'
import path from 'path'

var pkg = fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
pkg = pkg.replace('"name": "moverlay",', '"name": "moverlay-bare",')
fs.writeFileSync(path.join(__dirname, 'package.json'), 'utf8')

export default {
  entry: './src/moverlay.js',
  moduleName: 'moverlay',
  plugins:[
    buble(),
    minify({iife: 'bare/dist/moverlay.min.js'})
  ],
  external:[
    'mithril'
  ],
  globals:{
    'mithril': 'm'
  },
  targets: [
    { format: 'es',   dest: 'bare/dist/moverlay.es.js'},
    { format: 'cjs',  dest: 'bare/dist/moverlay.cjs.js'},
    { format: 'amd',  dest: 'bare/dist/moverlay.amd.js'},
    { format: 'iife', dest: 'bare/dist/moverlay.iife.js'},
  ]
}
