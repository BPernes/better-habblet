function handlePanelToggle(radioPanelStatus) {
  const radioPanel = document.querySelector('#area_player')
  const value = radioPanelStatus ? 'hidden' : ''
  radioPanel.setAttribute('style', `content-visibility: ${value};`)
}

function handlePlayerToggle(radioPlayerStatus) {
  const radioPlayer = document.querySelector('#player2')
  if (radioPlayerStatus) {
    radioPlayer.removeAttribute('autoplay')
    radioPlayer.pause()
  } else {
    radioPlayer.play()
  }
}

async function handleInitialValues() {
  const result = await chrome.storage.sync.get([
    'radioPanelStatus',
    'radioPlayerStatus',
  ])
  const parsedStatus = JSON.parse(
    `{"radioPanelStatus": ${result.radioPanelStatus}, "radioPlayerStatus": ${result.radioPlayerStatus}}`
  )

  const { radioPanelStatus, radioPlayerStatus } = parsedStatus
  handlePanelToggle(radioPanelStatus)
  handlePlayerToggle(radioPlayerStatus)
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === 'first-load-or-refresh') {
    const adPanels = document.querySelectorAll('[id="56dfgav234"], #hjk324nb2')
    const googlePanels = document.querySelectorAll(
      '.adsbygoogle, .google_ad, [id^="google_ads"], [class*="adsbygoogle"]'
    )
    const iframes = document.querySelectorAll('iframe')

    removeDomElements([iframes, adPanels, googlePanels])
    handleInitialValues()

    sendResponse({ status: 'Executado' })
  } else if (request.action === 'hide-radio-panel') {
    const { radioPanelStatus } = request
    handlePanelToggle(radioPanelStatus)
  } else if (request.action === 'radio-player-click') {
    const { radioPlayerStatus } = request
    handlePlayerToggle(radioPlayerStatus)
  }
})
