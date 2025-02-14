#!/usr/bin/env node

import * as esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

const popupEntry = 'popup.js'
const entryPoints = [
  './src/background/background.js',
  './src/utils/storage.js',
  './src/utils/removeDomElements.js',
  './src/utils/handitems.js',
  './src/content/styles/shadowDomStyles.js',
  './src/content/managePanels.js',
  './src/content/handItemMenu.js',
  path.resolve('src', 'popup', popupEntry),
]
const outdir = './dist'
const PORT = 3000
const devMode = process.argv[2]

if (devMode === '-d') {
  let ctx = await esbuild.context({
    entryPoints,
    outdir,
  })

  await ctx.watch()

  await ctx.serve({
    servedir: outdir,
    port: PORT,
  })

  copyNeededFiles()
} else {
  await esbuild.build({
    entryPoints,
    outdir,
    minify: true,
  })

  copyNeededFiles()
}

async function copyNeededFiles() {
  await fs.promises.copyFile(
    './src/popup/popup.html',
    './dist/popup/popup.html'
  )
  await fs.promises.copyFile('./src/popup/popup.css', './dist/popup/popup.css')
  await fs.promises.copyFile(
    './src/content/styles/handItemMenu.css',
    './dist/content/styles/handItemMenu.css'
  )
  await fs.promises.cp('./public', './dist', { recursive: true })
}
