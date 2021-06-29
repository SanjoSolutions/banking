export function createDOM(htmlText: string): Document {
  return new DOMParser().parseFromString(htmlText, 'text/html')
}
