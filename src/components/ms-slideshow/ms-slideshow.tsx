import { Component, Host, h, Prop, getAssetPath} from '@stencil/core';

@Component({
  tag: 'ms-slideshow',
  styleUrl: 'ms-slideshow.css',
  shadow: true,
  assetsDirs: ['asset'],
})

export class MsSlideshow {

  @Prop() slideshow_eins = "hotel.jpg";

  render() {
    return (
      <Host>
          <div class="slideshow-wrapper">
        <div class="slideshow"><img class="Bild" src={getAssetPath(`./assets/${this.slideshow_eins}`)} alt="Haus" /><h1 class="slideshowText">BeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltext</h1></div>
        </div>
      </Host>
    );
  }

}
