import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ms-fotogalerie',
  styleUrl: 'ms-fotogalerie.css',
  shadow: true,
})
export class MsFotogalerie {
  @Prop({ reflect: true, mutable: true }) imgSrc: string;

  private buchen() {
    alert('Viel Spaß in deinem Urlaub!');
  }
  render() {
    return (
      <Host>
        <h1 class="fotogalerie-headline">
          <slot name="fotogalerie-überschrift" />
        </h1>
        <div class="fotogalerie-wrapper">
          <div class="fotogalerie">
            <slot name="hotel_eins">
              <img class="bild" src={this.imgSrc} />
            </slot>
            <div class="hotelBeschreibung">
              <p>
                <h1>Hotel</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <button class="hotelBuchen" onClick={this.buchen}>
                Hotel buchen
              </button>
            </div>
          </div>

          <div class="fotogalerie">
            <slot name="hotel_zwei">
              <img class="bild" src={this.imgSrc} />
            </slot>
            <div class="hotelBeschreibung">
              <p>
                <h1>Hotel</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <button class="hotelBuchen" onClick={this.buchen}>
                Hotel buchen
              </button>
            </div>
          </div>

          <div class="fotogalerie">
            <slot name="hotel_drei">
              <img class="bild" src={this.imgSrc} />
            </slot>
            <div class="hotelBeschreibung">
              <p>
                <h1>Hotel</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <button class="hotelBuchen" onClick={this.buchen}>
                Hotel buchen
              </button>
            </div>
          </div>
        </div>

        <div class="fotogalerie-wrapper">
          <div class="fotogalerie">
            <slot name="hotel_vier">
              <img class="bild" src={this.imgSrc} />
            </slot>
            <div class="hotelBeschreibung">
              <p>
                <h1>Hotel</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <button class="hotelBuchen" onClick={this.buchen}>
                Hotel buchen
              </button>
            </div>
          </div>

          <div class="fotogalerie">
            <slot name="hotel_fünf">
              <img class="bild" src={this.imgSrc} />
            </slot>
            <div class="hotelBeschreibung">
              <p>
                <h1>Hotel</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <button class="hotelBuchen" onClick={this.buchen}>
                Hotel buchen
              </button>
            </div>
          </div>

          <div class="fotogalerie">
            <slot name="hotel_sechs">
              <img class="bild" src={this.imgSrc} />
            </slot>
            <div class="hotelBeschreibung">
              <p>
                <h1>Hotel</h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <button class="hotelBuchen" onClick={this.buchen}>
                Hotel buchen
              </button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
