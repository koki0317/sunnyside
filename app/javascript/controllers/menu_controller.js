import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {
  static targets = [ "hamburger"]
  connect() {
    console.log("hello")
  }

  open() {
    this.hamburgerTarget.classList.toggle("menu-mobile")
  }
}
