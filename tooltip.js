class Tooltip extends HTMLElement {
  // the super keyword here allows the child class (tooltip) use properties and methods from the parent class HTMLElement 

  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'Some dummy text.';
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      div {
        background-color: black;
        border: 1px solid orange;
        color: white;
        position: absolute;
        z-index: 10;
      }
    </style>
      <slot> Some default </slot> 
      <span> (?) </span>
    `
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseover', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    // this._tooltipContainer.style.backgroundColor = 'black';
    // this._tooltipContainer.style.color = 'white';
    // this._tooltipContainer.style.position = 'absolute';
    // this._tooltipContainer.style.zIndex = '10';
    this.shadowRoot. appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }

}

customElements.define('bb-tooltip', Tooltip)