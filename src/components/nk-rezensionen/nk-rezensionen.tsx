import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nk-rezensionen',
  styleUrl: 'nk-rezensionen.css',
  shadow: true,
})
export class NkRezensionen {

  render() {
    return (
      <Host>
        <div class="wrapper">
        <h1 class="rezensionen-headline"><slot name="rezensionen-überschrift" /></h1>
              <div class="rezensionen">
              <slot name="rezension_eins"></slot>
            </div>
              <div class="rezensionen">
              <slot name="rezension_zwei"></slot>
            </div>
              <div class="rezensionen">
              <slot name="rezension_drei"></slot>
          </div>
        </div>
      </Host>
    );
  }

}

