#!/usr/bin/env node

import * as esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

const popupEntry = 'popup.js'
const entryPoints = [
	'./src/background/background.js',
	'./src/content/index.js',
	path.resolve('src', 'popup', popupEntry),
]
const outdir = './dist'
const PORT = 3000
const devMode = process.argv[2]

if (devMode === '-d') {
	let ctx = await esbuild.context({
		bundle: true,
		entryPoints,
		format: 'iife',
		outdir,
	})

	copyNeededFiles()
	await ctx.watch()

	await ctx.serve({
		servedir: outdir,
		port: PORT,
	})

} else {
	await esbuild.build({
		entryPoints,
		outdir,
		minify: true,
		loader: {
			'.svg': 'dataurl',
			'.png': 'dataurl',
		},
	})

	copyNeededFiles()
}

async function copyNeededFiles() {
	await fs.promises.copyFile(
		'./src/popup/popup.html',
		'./dist/popup/popup.html'
	)
	await fs.promises.copyFile('./src/popup/popup.css', './dist/popup/popup.css')
	try {
		await fs.promises.copyFile(
			'./src/content/styles/handItemMenu.css',
			'./dist/content/styles/handItemMenu.css'
		)
	} catch (e) {
		console.log(e)
	}
	await fs.promises.cp('./public', './dist', { recursive: true })
}
