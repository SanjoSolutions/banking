import defineElement from "@sanjo/define-element";
import { flush } from "./flush.js";
import { Screens } from "./Screens.js";
import { isHidden, isShown } from "./showing.js";

describe("Screens", async () => {
  test("all screens hidden initially", async () => {
    const {$screen1, $screen2} = createScreens()
    await flush()
    expect(isHidden($screen1)).toEqual(true)
    expect(isHidden($screen2)).toEqual(true)
  });

  test("switching screens", async () => {
    const {$screens, $screen1, $screen2} = createScreens()
    await flush()
    $screens.setScreen($screen1)
    expect(isShown($screen1)).toEqual(true)
    expect(isHidden($screen2)).toEqual(true)
  });
});

function createScreens() {
  defineElement('c-screens', Screens)
  const $screens = document.createElement('c-screens') as Screens
  jest.spyOn($screens, '_onSlotChange')
  const $screen1 = document.createElement('div')
  $screen1.id = "screen1"
  const $screen2 = document.createElement('div')
  $screen2.id = "screen2"
  $screens.appendChild($screen1)
  $screens.appendChild($screen2)
  return {$screens, $screen1, $screen2}
}

