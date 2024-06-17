const habblet = 'https://www.habblet.city/hotelv2'

chrome.action.onClicked.addListener(async (tab) => {
	try {
		if (tab.url.startsWith(habblet)) {
			await chrome.scripting.executeScript({
				files: ['scripts/script.js'],
				target: { tabId: tab.id },
			});

		}
	} catch (error) {
		console.error('Error during click handling:', error);
	}
});
