import { Component, Host, Element, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'lt-filtergalerie',
  styleUrl: 'lt-filtergalerie.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class LTfiltergalerie {
  @Element() filtergalerieEl: HTMLElement;
  @Prop() image1 = 'world.jpg';
  @Prop() image2 = 'plane.jpg';
  @Prop() image3 = 'camp.jpg';

  handleClick() {
    let btnFilter = this.filtergalerieEl.shadowRoot.querySelector('.filter-menu').children;
    let filterImg = this.filtergalerieEl.shadowRoot.querySelector('.filter-item').children;
    for (let i = 0; i < btnFilter.length; i++) {
      btnFilter[i].addEventListener('click', function () {
        for (let j = 0; j < btnFilter.length; j++) {
          btnFilter[j].classList.remove('choice');
        }
        this.classList.add('choice');

        let targetImg = this.getAttribute('data-target');

        for (let k = 0; k < filterImg.length; k++) {
          filterImg[k].classList.remove('active');
          filterImg[k].classList.add('hidden');

          if (filterImg[k].getAttribute('data-item') == targetImg || targetImg == 'all') {
            filterImg[k].classList.remove('hidden');
            filterImg[k].classList.add('active');
          }
        }
      });
    }
  }

  render() {
    return (
      <Host>
        <div class="filtergalerie-wrapper">
          <ul class="filter-menu" onClick={() => this.handleClick()}>
            <li data-target="all">Alle</li>
            <li data-target="filter1">Filter 1</li>
            <li data-target="filter2">Filter 2</li>
            <li data-target="filter3">Filter 3</li>
          </ul>

          <ul class="filter-item">
            <li data-item="filter1">
              <img src={getAssetPath(`./assets/${this.image1}`)} />
            </li>
            <li data-item="filter3">
              <img src={getAssetPath(`./assets/${this.image3}`)} />
            </li>
            <li data-item="filter1">
              <img src={getAssetPath(`./assets/${this.image1}`)} />
            </li>
            <li data-item="filter1">
              <img src={getAssetPath(`./assets/${this.image1}`)} />
            </li>
            <li data-item="filter2">
              <img src={getAssetPath(`./assets/${this.image2}`)} />
            </li>
            <li data-item="filter1">
              <img src={getAssetPath(`./assets/${this.image1}`)} />
            </li>
            <li data-item="filter2">
              <img src={getAssetPath(`./assets/${this.image2}`)} />
            </li>

            <li data-item="filter2">
              <img src={getAssetPath(`./assets/${this.image2}`)} />
            </li>

            <li data-item="filter3">
              <img src={getAssetPath(`./assets/${this.image3}`)} />
            </li>
            <li data-item="filter3">
              <img src={getAssetPath(`./assets/${this.image3}`)} />
            </li>
            <li data-item="filter3">
              <img src={getAssetPath(`./assets/${this.image3}`)} />
            </li>
            <li data-item="filter2">
              <img src={getAssetPath(`./assets/${this.image2}`)} />
            </li>
          </ul>
        </div>
      </Host>
    );
  }
}
