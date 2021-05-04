import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ms-slideshow',
  styleUrl: 'ms-slideshow.css',
  shadow: true,
})
export class MsSlideshow {
  @Prop({ reflect: true, mutable: true }) imgSrc: string;

  bildEinsLaden() {
    const slideEins = document.getElementById('slideshowEins');
    const slideZwei = document.getElementById('slideshowZwei');
    const slideDrei = document.getElementById('slideshowDrei');
    slideEins.style.visibility = 'visible';
    slideZwei.style.visibility = 'hidden';
    slideDrei.style.visibility = 'hidden';
  }
  bildZweiLaden() {
    const slideEins = document.getElementById('slideshowEins');
    const slideZwei = document.getElementById('slideshowZwei');
    const slideDrei = document.getElementById('slideshowDrei');
    slideEins.style.visibility = 'hidden';
    slideZwei.style.visibility = 'visible';
    slideDrei.style.visibility = 'hidden';
  }
  bildDreiLaden() {
    const slideEins = document.getElementById('slideshowEins');
    const slideZwei = document.getElementById('slideshowZwei');
    const slideDrei = document.getElementById('slideshowDrei');
    slideEins.style.visibility = 'hidden';
    slideZwei.style.visibility = 'hidden';
    slideDrei.style.visibility = 'visible';
  }

  render() {
    return (
      <Host>
        <div class="slideshow-wrapper">
          <div id="slideshowEins">
            <slot name="slideshow_eins"></slot>
            <img class="bild" src={this.imgSrc} />
            <div class="button-wrapper">
              <button id="bild1" onClick={this.bildEinsLaden}>
                1
              </button>
              <button id="bild2" onClick={this.bildZweiLaden}>
                2
              </button>
              <button id="bild3" onClick={this.bildDreiLaden}>
                3
              </button>
            </div>
          </div>
          <div id="slideshowZwei">
            <slot name="slideshow_zwei"></slot>
            <img class="bild" src={this.imgSrc} />
          </div>
          <div id="slideshowDrei">
            <slot name="slideshow_drei"></slot>
            <img class="bild" src={this.imgSrc} />
          </div>
          <div class="überschrift-wrapper">
            <h1 id="slideshowÜberschrift">
              <slot name="slideshow-überschrift" />
            </h1>
          </div>
        </div>
      </Host>
    );
  }
}
