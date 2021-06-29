import { Screens } from "./Screens.js";
import { hide, show } from "./showing.js";

customElements.define('c-screens', Screens)

document.addEventListener('DOMContentLoaded', function () {
  const $screens = document.getElementById('screens')! as Screens

  const $options = document.getElementById('options')!
  const $deposit = document.getElementById('deposit')!
  const $transfer = document.getElementById('transfer')!

  const $doDeposit = $options.querySelector('#doDeposit')!
  const $doTransfer = $options.querySelector('#doTransfer')!

  $screens.setScreen($options)

  $doDeposit.addEventListener('click', function () {
    showScreen($deposit)
  })

  $doTransfer.addEventListener('click', function () {
    showScreen($transfer)
  })

  function showScreen(screen: HTMLElement) {
    $screens.setScreen(screen)
    focusFirstInput(screen)
  }

  function focusFirstInput(element: HTMLElement) {
    const $firstInput = element.querySelector('input')
    if ($firstInput) {
      $firstInput.focus()
    }
  }
})
