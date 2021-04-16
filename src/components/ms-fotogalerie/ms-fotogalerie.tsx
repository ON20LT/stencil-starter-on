import { Component, Prop, getAssetPath, Host, h} from '@stencil/core';

@Component({
  tag: 'ms-fotogalerie',
  styleUrl: 'ms-fotogalerie.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MsFotogalerie {

  @Prop() image ="hotel.jpg";


  render() {
    return (
      <Host>
          <h1 class="fotogalerie-headline">Die besten Hotels im Überblick</h1>
          <div class="fotogalerie-wrapper">
            <div class="fotogalerie"><img class="bild" src={getAssetPath(`./assets/${this.image}`)} alt="Haus mit Pool" /><p class="hotelBeschreibung"><h1>Hotel XYZ</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
            <div class="fotogalerie"><img class="bild" src={getAssetPath(`./assets/${this.image}`)} alt="Haus mit Pool" /><p class="hotelBeschreibung"><h1>Hotel XYZ</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
            <div class="fotogalerie"><img class="bild" src={getAssetPath(`./assets/${this.image}`)} alt="Haus mit Pool" /><p class="hotelBeschreibung"><h1>Hotel XYZ</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
          </div>
        <button class="hotelsLaden">Mehr Hotels Laden</button>
      </Host>
    );
  }

}
