import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {
  static targets = [ "hamburger", "clickme" ]
  connect() {
  }

  open() {
    this.hamburgerTarget.classList.toggle("menu-mobile")
    this.clickmeTarget.classList.toggle("hidden")
    }
}
