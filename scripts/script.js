const radioPlayer = document.querySelector('#area_player');
const topAdPanel = document.querySelector('#ads1');
const bottomAdPanel = document.querySelector('#ads2');

function removeIframes() {
	const iframes = document.querySelectorAll('iframe')
	if (iframes) {
		iframes.forEach(iframe => {
			if (iframe.src.includes('google.com') || iframe.src.includes('doubleclick.net')) {
				iframe.remove();
				console.log('Removed Google Ad iframe:', iframe);
			}
		});
	}

}

function removeGoogleAdPanels() {
	const googlePanels = document.querySelectorAll('.adsbygoogle, .google_ad, [id^="google_ads"], [class*="adsbygoogle"]')
	if (googlePanels) {
		googlePanels.forEach(ad => {
			ad.remove();
			console.log('Removed Google Ad element:', ad);
		});
	}
}

if (radioPlayer) {
	radioPlayer.remove()
}
if (topAdPanel) {
	topAdPanel.remove()
}
if (bottomAdPanel) {
	bottomAdPanel.remove()
}

removeIframes()
removeGoogleAdPanels()


