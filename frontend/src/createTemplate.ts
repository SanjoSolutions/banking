import { createDOM } from './createDOM.js'

export function createTemplate(templateText: string): HTMLTemplateElement {
  const dom = createDOM(templateText)
  const template = dom.querySelector('template')
  if (!template) {
    throw new Error('template element not found')
  }
  return template
}
