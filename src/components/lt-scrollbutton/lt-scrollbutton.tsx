import { Component, Element, Prop, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'lt-scrollbutton',
  styleUrl: 'lt-scrollbutton.css',
  shadow: true,
})
export class LTscrollbutton {
  @Element() scrollEl: HTMLElement;

  @Prop() title: string;

  @State() toggle: boolean = false;

  handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div>
        <button type="button" class="button" onClick={() => this.handleClick()}>
          Top
        </button>
      </div>
    );
  }
}
