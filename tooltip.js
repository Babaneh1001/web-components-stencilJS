class Tooltip extends HTMLElement {
  // the super keyword here allows the child class (tooltip) use properties and methods from the parent class HTMLElement 

  constructor() {
    super();
    this._tooltipContainer;
  }

  connectedCallback() {
    this._tooltipText = this.getAttribute('text');
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = '(?)';
    tooltipIcon.addEventListener('mouseover', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = 'This is the tooltiptext!.';
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }

}

customElements.define('bb-tooltip', Tooltip)