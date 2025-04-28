import { shadowDOMRoot } from "./shadowDOMHelper"
import {
	HANDITEMS,
	MENU_ITEM_CLASSES,
	MENU_CARD_CLASSES,
	DRAGGABLE_WINDOW_CLASSES,
	DRAGGABLE_WINDOW_STYLES,
	NITRO_CARD_HEADER_CLASSES,
	TEXT_WRAPPER,
	HEADER_TEXT,
	CLOSE_ICON,
	GRID_CONTAINER,
	IMG_WRAPPER

} from "./utils/constants.js"

export function getHanditemMenuIcon() {
	const handitemImgSrc = chrome.runtime.getURL(
		'/resources/images/menu-icon.png'
	)
	const handitemMenuSelector = `div:has(> img[src="${handitemImgSrc}"])`

	const handitemMenuElement = document.querySelector(handitemMenuSelector)
	if (handitemMenuElement) {
		return { status: true, element: handitemMenuElement }
	}
	return { status: false, element: null }
}

function isHanditemWindowOpen() {
	const handitemWindow = shadowDOMRoot.querySelector('#handitem-menu')
	if (handitemWindow) {
		return true
	}
	return false
}

function handleHanditemClick() {
	const isHanditemMenuOpen = isHanditemWindowOpen()
	if (isHanditemMenuOpen) {
		removeHanditemCard()
	} else {
		createHanditemCard()
	}
}

export function removeHanditemCard() {
	const card = shadowDOMRoot.querySelector('#handitem-menu')
	if (card) {
		card.remove()
	}
}

export function createHanditemIcon(parentNode) {
	const handitemMenu = getHanditemMenuIcon()
	if (!handitemMenu.status) {
		const handitemContainer = document.createElement('div')
		const handitemImg = document.createElement('img')

		handitemContainer.classList.add(...MENU_ITEM_CLASSES)
		handitemImg.src = chrome.runtime.getURL('/resources/images/menu-icon.png')

		handitemContainer.appendChild(handitemImg)

		handitemContainer.addEventListener('click', handleHanditemClick)
		parentNode.appendChild(handitemContainer)
	}
}

function createHanditemCard() {
	const dragContainer = document.createElement('div')
	dragContainer.classList.add(...DRAGGABLE_WINDOW_CLASSES)
	dragContainer.setAttribute('style', DRAGGABLE_WINDOW_STYLES)
	dragContainer.setAttribute('id', 'handitem-menu')

	const cardContainer = document.createElement('div')
	cardContainer.classList.add(...MENU_CARD_CLASSES)

	const headerContainer = document.createElement('div')
	headerContainer.classList.add(...NITRO_CARD_HEADER_CLASSES)

	const textWrapper = document.createElement('div')
	textWrapper.classList.add(...TEXT_WRAPPER)

	const headerText = document.createElement('span')
	headerText.textContent = 'Handitems'
	headerText.classList.add(...HEADER_TEXT)

	const closeIcon = document.createElement('div')
	closeIcon.classList.add(...CLOSE_ICON)

	const gridContainer = document.createElement('div')

	const handitemIcons = getHanditemIcons()

	textWrapper.appendChild(headerText)
	textWrapper.appendChild(closeIcon)
	headerContainer.appendChild(textWrapper)
	gridContainer.classList.add(...GRID_CONTAINER)
	gridContainer.append(...handitemIcons)

	cardContainer.appendChild(headerContainer)
	cardContainer.appendChild(gridContainer)
	dragContainer.appendChild(cardContainer)

	shadowDOMRoot.appendChild(dragContainer)

	function onMouseDrag({ movementX, movementY }) {
		let containerStyles = window.getComputedStyle(dragContainer)
		let left = parseInt(containerStyles.left)
		let top = parseInt(containerStyles.top)

		dragContainer.style.left = `${left + movementX}px`
		dragContainer.style.top = `${top + movementY}px`
	}

	function getHanditemIcons() {
		const target = document.querySelector('input.chat-input')
		const container = document.querySelector('div.chatinput-container')

		const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
			window.HTMLInputElement.prototype,
			'value'
		).set

		let handitemIcons = []
		HANDITEMS.forEach((handitem) => {
			const handitemIcon = document.createElement('div')
			const handitemSrc = chrome.runtime.getURL(handitem.imgPath)
			handitemIcon.setAttribute(
				'style',
				`background-image: url(${handitemSrc})`
			)

			handitemIcon.classList.add(...IMG_WRAPPER)
			handitemIcon.addEventListener('click', () => {
				const inputEvent = new Event('input', { bubbles: true })
				const enterKeyEvent = new KeyboardEvent('keydown', {
					key: 'Enter',
					code: 'Enter',
					keyCode: '13',
					bubbles: true,
					cancelable: true,
				})
				nativeInputValueSetter.call(target, handitem.code)
				container.setAttribute('data-value', handitem.code)
				target.dispatchEvent(inputEvent)
				target.dispatchEvent(enterKeyEvent)
				nativeInputValueSetter.call(target, '')
				container.setAttribute('data-value', '')
			})

			handitemIcons.push(handitemIcon)
		})
		return handitemIcons
	}

	dragContainer.addEventListener('mousedown', () => {
		dragContainer.addEventListener('mousemove', onMouseDrag)
	})

	dragContainer.addEventListener('mouseup', () => {
		dragContainer.removeEventListener('mousemove', onMouseDrag)
	})

	closeIcon.addEventListener('click', removeHanditemCard)
}
