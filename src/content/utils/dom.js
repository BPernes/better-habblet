function isValidHtmlTag(tagName) {
	if (typeof tagName !== 'string') {
		return false
	}
	try {
		const element = document.createElement(tagName)
		return element instanceof HTMLElement
	} catch (e) {
		return false
	}
}

export function createDOMElement(tag, classNames, attributes) {
	if (!isValidHtmlTag(tag)) {
		throw new Error("Tag name is not a valid HTML tag")
	}

	const element = document.createElement(tag)

	if (classNames) {
		element.classList.add(...classNames)
	}

	if (attributes) {
		attributes.forEach((attr) => element.setAttribute(attr.name, attr.value))
	}

	return element
}


export function createDOMElementRecursive(element) {
	const node = createDOMElement(element.tag, element?.classes, element?.attributes)

	if (!(node instanceof HTMLElement)) {
		throw new Error("Unable to create valid dom element")
	}

	if (element.children) {
		element.children.forEach((child) => {
			const childNode = createDOMElementRecursive(child)
			node.appendChild(childNode)
		})
	}

	return node
}
