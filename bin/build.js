#!/usr/bin/env node

'use strict'

/**
 * Node Modules
 */
// eslint-disable-next-line no-unused-vars
const fs = require('fs')
const rimraf = require('rimraf')
const { execSync } = require('child_process')

/**
 * Tasks
 */
// remove distFolder
rimraf.sync('book-panel')
// create book-panel folder
execSync('mkdirp book-panel')
execSync('mkdirp book-panel/js')
execSync('mkdirp book-panel/css')
execSync('mkdirp book-panel/img')
execSync('cp -r src/img book-panel')
execSync('cp src/css/main.min.css book-panel/css')
const data = fs.readFileSync('book-panel/css/main.min.css', 'utf-8')
const regex = new RegExp(/\/\*# sourceMappingURL=main.min.css.map \*\//)
const newValue = data.replace(regex, '')
fs.writeFileSync('book-panel/css/main.min.css', newValue, 'utf-8')
fs.renameSync('book-panel/css/main.min.css', 'book-panel/css/book-panel.min.css')
execSync('npm run babel')
