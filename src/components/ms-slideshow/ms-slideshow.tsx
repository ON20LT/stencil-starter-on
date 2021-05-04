import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ms-slideshow',
  styleUrl: 'ms-slideshow.css',
  shadow: true,
})
export class MsSlideshow {
  @Prop({ reflect: true, mutable: true }) imgSrc: string;
  /*@Prop() slideEins = document.getElementById('slideshowEins');
  @Prop() slideZwei = document.getElementById('slideshowZwei');
  @Prop() slideDrei = document.getElementById('slideshowDrei');
  @Prop() SlideAnzahl: number = 0;*/

  /*slideZurück() {
    const slideEins = document.getElementById('slideshowEins');
    const slideZwei = document.getElementById('slideshowZwei');
    const slideDrei = document.getElementById('slideshowDrei');
    if (this.SlideAnzahl === 0) {
      slideDrei.style.visibility = 'visible';
      slideEins.style.visibility = 'hidden';
      this.SlideAnzahl = 1;
    } else if (this.SlideAnzahl === 1) {
      slideZwei.style.visibility = 'visible';
      slideDrei.style.visibility = 'hidden';
      this.SlideAnzahl = 2;
    } else if (this.SlideAnzahl === 2) {
      slideZwei.style.visibility = 'hidden';
      slideEins.style.visibility = 'visible';
      this.SlideAnzahl = 0;
    }
    /*
    if ((this.slideEins.style.visibility = 'visible')) {
      this.slideEins.style.visibility = 'hidden';
      this.slideDrei.style.visibility = 'visible';
    } else if ((this.slideZwei.style.visibility = 'visible')) {
      this.slideZwei.style.visibility = 'hidden';
      this.slideEins.style.visibility = 'visible';
    } else if ((this.slideDrei.style.visibility = 'visible')) {
      this.slideDrei.style.visibility = 'hidden';
      this.slideZwei.style.visibility = 'visible';
    }
  }

  slideVor() {
    console.log('Hallo');
    let slideEins = document.getElementById('slideshowEins');
    let slideZwei = document.getElementById('slideshowZwei');
    let slideDrei = document.getElementById('slideshowDrei');
    if ((slideEins.style.visibility = 'visible')) {
      slideEins.style.visibility = 'hidden';
      slideZwei.style.visibility = 'visible';
      slideDrei.style.visibility = 'hidden';
    } else if ((slideZwei.style.visibility = 'visible')) {
      slideDrei.style.visibility = 'visible';
      slideZwei.style.visibility = 'hidden';
    } else if ((slideDrei.style.visibility = 'visible')) {
      slideEins.style.visibility = 'visible';
      slideDrei.style.visibility = 'hidden';
      slideEins.style.visibility = 'hidden';
    }
    
    let i: number;
    let count: number = 0;

    for (i = 0; i < slide.length; i++) {
      slide[i].setAttribute('style', 'display:flex');
    }
    count++;
    if (count > slide.length) {
      count = 1;
      slide[count - 1].setAttribute('style', 'display:felx');
      setTimeout(this.buttonGeklickt, 2000);
    }
  } */
  @Prop() slideEins = document.getElementById('slideshowEins');
  @Prop() slideZwei = document.getElementById('slideshowZwei');
  @Prop() slideDrei = document.getElementById('slideshowDrei');

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
