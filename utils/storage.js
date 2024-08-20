/*
 * Função que retorna busca um valor no sync storage de acordo com a chave
 * @param {string} key - Chave a ser buscada no sync storage
 * @returns {Promise<string>} Promise object with the key value
 */
export async function retrieveSyncStorageValue(key) {
	const result = await chrome.storage.sync.get([key])
	const value = JSON.parse(result[key])
	return value
}
