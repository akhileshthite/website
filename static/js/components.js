/* eslint-env browser */

class SiteNav extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
      <nav>
        <a href="/">Home</a> ~
        <a href="/talks">Talks</a> ~
        <a href="/blog">Blog</a> ~
        <a href="/contact">Contact</a> ~
        <a href="/art">Art</a>
      </nav>
    `
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
      <footer>
        <p>© 2021-2026 Akhilesh Thite</p>
      </footer>
    `
  }
}

customElements.define('site-nav', SiteNav)
customElements.define('site-footer', SiteFooter)
