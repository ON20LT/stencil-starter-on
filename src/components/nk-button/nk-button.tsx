import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nk-button',
  styleUrl: 'nk-button.css',
  shadow: true,
})
export class NkButton {

  @Prop() text: string;
  @Prop() appearance: string;
  
    render() {
      return (
        <button class={`btn ${this.appearance}`} type="button">
          {this.text}
        </button>
      );
    }
  
  }
  