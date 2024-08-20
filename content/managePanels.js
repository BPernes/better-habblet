const radioPanel = document.querySelector("#area_player")
const radioPlayer = document.querySelector("#player2")

function removeElements(elementsArr) {
	if (elementsArr) {
		elementsArr.forEach(element => {
			element.remove();
		})
	}
}

function removeIframes() {
	const iframes = document.querySelectorAll('iframe')
	if (iframes) {
		iframes.forEach(iframe => {
			if (iframe.src.includes('google.com') || iframe.src.includes('doubleclick.net')) {
				iframe.remove();
			}
		});
	}
}

function removeAdsPanels() {
	const adPanels = document.querySelectorAll('#ads1, #ads2')
	removeElements(adPanels)
}

function removeGoogleAdPanels() {
	const googlePanels = document.querySelectorAll('.adsbygoogle, .google_ad, [id^="google_ads"], [class*="adsbygoogle"]')
	removeElements(googlePanels)
}

function handlePanelToggle(radioPanelStatus) {
	const value = radioPanelStatus ? 'hidden' : ''
	radioPanel.setAttribute('style', `content-visibility: ${value};`)
}

function handlePlayerToggle(radioPlayerStatus) {
	if (radioPlayerStatus) {
		radioPlayer.removeAttribute("autoplay")
		radioPlayer.pause()
	} else {
		radioPlayer.play()
	}
}

async function handleInitialValues() {
	const result = await chrome.storage.sync.get(["radioPanelStatus", "radioPlayerStatus"])
	const parsedStatus = JSON.parse(`{"radioPanelStatus": ${result.radioPanelStatus}, "radioPlayerStatus": ${result.radioPlayerStatus}}`)

	const { radioPanelStatus, radioPlayerStatus } = parsedStatus
	handlePanelToggle(radioPanelStatus)
	handlePlayerToggle(radioPlayerStatus)

}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
	if (request.action === "first-load-or-refresh") {
		removeIframes()
		removeGoogleAdPanels()
		removeAdsPanels()
		handleInitialValues()

		sendResponse({ status: "Executado" })
	}

	else if (request.action === "hide-radio-panel") {
		const { radioPanelStatus } = request
		handlePanelToggle(radioPanelStatus)
	}

	else if (request.action === "radio-player-click") {
		const { radioPlayerStatus } = request
		handlePlayerToggle(radioPlayerStatus)
	}
})
