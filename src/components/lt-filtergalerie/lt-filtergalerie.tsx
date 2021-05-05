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
    let btnSort = this.filtergalerieEl.shadowRoot.querySelector('.filter-menu').children;
    let sortImg = this.filtergalerieEl.shadowRoot.querySelector('.filter-item').children;
    for (let i = 0; i < btnSort.length; i++) {
      btnSort[i].addEventListener('click', function () {
        for (let j = 0; j < btnSort.length; j++) {
          btnSort[j].classList.remove('current');
        }
        this.classList.add('current');

        let targetImg = this.getAttribute('data-target');

        for (let k = 0; k < sortImg.length; k++) {
          sortImg[k].classList.remove('active');
          sortImg[k].classList.add('delete');

          if (sortImg[k].getAttribute('data-item') == targetImg || targetImg == 'all') {
            sortImg[k].classList.remove('delete');
            sortImg[k].classList.add('active');
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
