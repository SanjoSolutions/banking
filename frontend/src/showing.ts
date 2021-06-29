export const hiddenClass = 'hidden'

export function hide(element: Element) {
  element.classList.add(hiddenClass)
}

export function show(element: Element) {
  element.classList.remove(hiddenClass)
}

export function isHidden(element: Element): boolean {
  return element.classList.contains(hiddenClass)
}

export function isShown(element: Element): boolean {
  return !isHidden(element)
}

