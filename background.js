const TARGET_URL = 'https://www.habblet.city/hotelv2'
const GREY_ICONS = {
	path: {
		16: "./images/icon-16-grey.png",
		32: "./images/icon-32-grey.png",
		48: "./images/icon-48-grey.png",
		128: "./images/icon-128-grey.png",
	}
}
const DEFAULT_ICONS = {
	path: {
		16: "./images/icon-16.png",
		32: "./images/icon-32.png",
		48: "./images/icon-48.png",
		128: "./images/icon-128.png",
	}
}

/**
	* Função que ativa ou desativa a extensão
	* @param {'on'|'off'} newStatus - O status para qual a extensão será atualizada
	* @param {number} tabId - Identificador da aba atual
	* @returns {void}
	*/
async function changeExtensionStatus(newStatus, tabId) {
	if (newStatus === "on") {
		chrome.action.enable()
		await chrome.action.setIcon({ tabId, ...DEFAULT_ICONS })
		await chrome.action.setPopup({ popup: './popup/popup.html' })
	} else {
		chrome.action.disable()
		await chrome.action.setIcon({ tabId, ...GREY_ICONS })
		await chrome.action.setPopup({ popup: '' })
	}
}

chrome.runtime.onInstalled.addListener(async (details) => {
	if (details.reason === "install") {
		try {
			await chrome.storage.sync.set({ radioPlayerStatus: "true", radioPanelStatus: "true" })
		} catch (e) {
			console.error("Não conseguiu setar o valor inicial", e)
		}
	}
})

chrome.tabs.onActivated.addListener(async (activeTab) => {
	const response = await chrome.tabs.get(activeTab.tabId)
	if (response.status === "complete") {
		if (response.url && response.url.includes(TARGET_URL)) {
			changeExtensionStatus('on', response.id)
		} else {
			changeExtensionStatus('off', response.id)
		}
	}
})

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
	if (changeInfo.status === "complete") {
		if (tab.url && tab.url.includes(TARGET_URL)) {
			changeExtensionStatus('on', tabId)
			try {
				await chrome.tabs.sendMessage(tabId, { action: "first-load-or-refresh" })
			} catch (e) {
				console.error("Erro ao enviar a mensagem:", e)
			}
		}
		else {
			changeExtensionStatus('off', tabId)
		}
	}
})

