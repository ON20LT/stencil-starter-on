import { Component, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'nk-easteregg',
  styleUrl: 'nk-easteregg.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class NkEasteregg {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop()
  header: string;
  @Prop() appearance: string;
  @Prop() isopen: boolean;
  @Prop() closeIcon = 'icon_x.svg';

  private handleCancel = () => {
    this.isopen = false;
  };

  private handleNoCLick = () => {
    alert('Das ist leider die falsche Antwort. Wähle doch lieber die andere Option :)');
  };
  private handleYesCLick = () => {
    this.isopen = false;
  };

  render() {
    return (
      <div class={this.isopen ? 'wrapper is-open' : 'wrapper'}>
        <div class="background" onClick={this.handleCancel} />
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            <button class="no" onClick={this.handleNoCLick}>
              Naja...
            </button>
            <button class="yes" onClick={this.handleYesCLick}>
              Ja, super!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
