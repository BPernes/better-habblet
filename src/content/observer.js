/**
	* Creates a observer object that can subscribe, unsubscribe and broadcast events
	*/
export function createObserver() {
	const { events } = createObserver()

	return {
		events: {},

		/**
		* Subscribe to listen for an event
		* @param {string} name - Event name
		* @param {function} callback - Callback to fire when the event happens
		*/
		subscribe(name, callback) {
			events[name] = events[name] || []
			events[name].push(callback)

		},

		/**
		* Unsubscribe to an event
		* @param {string} name - Event name
		* @param {function} callback - Callback to be identified
		*/
		unsubscribe(name, callback) {
			if (events[name]) {
				events[name].filter((fn) => fn !== callback)
			}
		},

		/**
		* Broadcasts the data for the event
		* @param {string} name - Event name
		* @param {object|string|int} data - Data that will be passed to the event
		*/
		broadcast(name, data) {
			if (events[name]) {
				events[name].forEach((fn) => fn(data))
			}
		},
	}
}
