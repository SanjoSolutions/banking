import { createTemplate } from "./createTemplate.js";
import { hide, show } from "./showing.js";

const template = createTemplate(
  `
    <template>
      <slot />
    </template>
  `
)

export class Screens extends HTMLElement {
  private _shadowRoot: ShadowRoot

  constructor() {
    super()

    this._onSlotChange = this._onSlotChange.bind(this)

    const templateContent = template.content
    this._shadowRoot = this.attachShadow({mode: 'closed'})
    this._shadowRoot.appendChild(templateContent.cloneNode(true))
    const slot = this._getSlot()
    slot.addEventListener('slotchange', this._onSlotChange)
  }

  _getSlot(): HTMLSlotElement {
    return this._shadowRoot.querySelector('slot')!
  }

  _getScreens(): Element[] {
    const slot = this._getSlot()
    const elements = slot.assignedElements()
    return elements
  }

  _hideScreens() {
    this._getScreens().forEach(hide)
  }

  _onSlotChange() {
    this._hideScreens()
  }

  setScreen(screen: Element) {
    this._hideScreens()
    show(screen)
  }
}
