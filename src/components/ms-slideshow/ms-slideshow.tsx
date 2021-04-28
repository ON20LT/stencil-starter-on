import { Component, Host, Prop, h} from '@stencil/core';

@Component({
  tag: 'ms-slideshow',
  styleUrl: 'ms-slideshow.css',
  shadow: true,
})

export class MsSlideshow {

  @Prop({reflect: true, mutable: true}) imgSrc: string;
  
  

  render() {
    return (
      <Host>
<div class="slideshow-wrapper">
            <div class="slideshow">
              <slot name="slideshow_eins"></slot>
              <img class="bild" src={this.imgSrc} />
            </div>

            <div class="slideshow">
              <slot name="slideshow_zwei"></slot>
              <img class="bild" src={this.imgSrc} />
            </div>

            <div class="slideshow">
              <slot name="slideshow_drei"></slot>
              <img class="bild" src={this.imgSrc} />
            </div>
            
            <h1 class="slideshow-headline"><slot name="slideshow-überschrift" /></h1>
          </div>
      </Host>
    );
  }

}
