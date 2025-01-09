#!/usr/bin/env node

import * as esbuild from 'esbuild'
import fs from 'fs'

const entryPoints = [
  './src/background/background.js',
  './src/utils/storage.js',
  './src/utils/removeDomElements.js',
  './src/utils/handitems.js',
  './src/content/styles/shadowDomStyles.js',
  './src/content/managePanels.js',
  './src/content/handItemMenu.js',
  './src/popup/popup.js',
]

async function build() {
  await esbuild.build({
    entryPoints: entryPoints,
    outdir: './dist',
    bundle: true,
    minify: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl' },
  })

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

build().catch((err) => {
  console.log(err)
  process.exit(1)
})
