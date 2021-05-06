import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nk-flipcard',
  styleUrl: 'nk-flipcard.css',
  shadow: true,
})
export class NkFlipcard{

  @Prop({reflect: true, mutable: true}) imgSrc: string;

  private handleClick = () => {
    alert("Vielen Dank für Dein Interesse!")
  };

  render() {
    return (
      <Host>
        
        <div class="flipcard-wrapper">
          <div class="card">
            <div class="card-front">
              <slot name="card-front"></slot>
            </div>
            <div class="card-back">
              <slot name="card-back"></slot>
              <nk-button text="Jetzt buchen" appearance="standard" onClick={this.handleClick}/>
            </div>
            </div>

            <div class="card">
            <div class="card-front2">
              <slot name="card-front2"></slot>
            </div>
            <div class="card-back2">
              <slot name="card-back2"></slot>
              <nk-button text="Jetzt buchen" appearance="standard" onClick={this.handleClick}/>
            </div>
            </div>

            <div class="card">
          <div class="card-front3">
              <slot name="card-front3"></slot>
            </div>
            <div class="card-back3">
              <slot name="card-back3"></slot>
              <nk-button text="Jetzt buchen" appearance="standard" onClick={this.handleClick}/>
            </div>
            </div>
            </div>
      </Host>
    );
  }
}
