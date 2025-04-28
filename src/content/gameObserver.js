import { createHanditemIcon, removeHanditemCard, getHanditemMenuIcon } from "./handitens"

function watchRootNode(mutations,) {
	mutations.forEach((mutation) => {
		const addedNodes = mutation.addedNodes
		const firstNode = addedNodes.item(0)

		const isPlayerOnRoom =
			mutation.type === 'childList' &&
			firstNode?.className === 'nitro-room-chatinput-component'
		const isPlayerOnHall =
			mutation.type === 'childList' &&
			firstNode?.className === 'nitro-hotel-view'

		if (isPlayerOnRoom) {
			removeHanditemCard()
			const menuContainer = document.querySelector(
				'div:has(> div.icon-inventory)'
			)
			createHanditemIcon(menuContainer)
		}

		if (isPlayerOnHall) {
			const handitemIcon = getHanditemMenuIcon()
			removeHanditemCard()
			if (handitemIcon.status) {
				handitemIcon.element.remove()
			}
		}
	})
}

function watchDomNode() {
	const rootElement = document.querySelector('#root')

	const observer = new MutationObserver(watchRootNode)
	observer.observe(rootElement, { subtree: true, childList: true })
}

watchDomNode()
