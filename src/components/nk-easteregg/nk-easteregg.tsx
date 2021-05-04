import { Component, h, getAssetPath, Prop, State } from '@stencil/core';

@Component({
  tag: 'nk-easteregg',
  styleUrl: 'nk-easteregg.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class NkEasteregg {
  // Props
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop() header: string;
  @Prop() appearance: string; 
  @Prop() isopen: boolean;
  @Prop() closeIcon= 'icon_x.svg';
  
 

   //Functions
   private handleCancel = () => {
    this.isopen = false;
  };

  private handleNoCLick = () => {
    alert("Das ist leider die falsche Antwort. Wähle doch lieber die andere Option :)")
  };
  private handleYesCLick = () => {
    this.isopen = false;
  };

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper is-open' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel}/>
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
             <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />
            </div>
          </div>
          <div class="body">
          <slot/>
          </div>
          <div class="footer">
            <button class="no" onClick={this.handleNoCLick}>Naja...</button>
            <button class="yes" onClick={this.handleYesCLick}>Ja, super!</button>
          </div>
        </div>
      </div>
    );
  }

}
