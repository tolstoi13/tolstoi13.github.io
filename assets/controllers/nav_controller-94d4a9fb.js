import { Controller } from "@hotwired/stimulus"

// Мобильное меню: бургер открывает/закрывает навигацию,
// клик по ссылке закрывает её.
export default class extends Controller {
  static targets = ["menu"]

  toggle() {
    this.menuTarget.classList.toggle("open")
    this.element.classList.toggle("nav-open")
  }

  close() {
    this.menuTarget.classList.remove("open")
    this.element.classList.remove("nav-open")
  }
}
