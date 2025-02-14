function removeDomElements(elements) {
  if (elements) {
    elements.forEach((element) => {
      if (element) {
        element.forEach((domNode) => {
          domNode.remove()
        })
      }
    })
  }
}
