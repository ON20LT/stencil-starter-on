var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, getAssetPath, Host, h } from '@stencil/core';
let MsFotogalerie = class MsFotogalerie {
    constructor() {
        this.image = "hotel.jpg";
    }
    render() {
        return (h(Host, null,
            h("h1", { class: "fotogalerie-headline" }, "Die besten Hotels im \u00DCberblick"),
            h("div", { class: "fotogalerie-wrapper" },
                h("div", { class: "fotogalerie" },
                    h("img", { class: "bild", src: getAssetPath(`./assets/${this.image}`), alt: "Haus mit Pool" }),
                    h("p", { class: "hotelBeschreibung" },
                        h("h1", null, "Hotel XYZ"),
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.")),
                h("div", { class: "fotogalerie" },
                    h("img", { class: "bild", src: getAssetPath(`./assets/${this.image}`), alt: "Haus mit Pool" }),
                    h("p", { class: "hotelBeschreibung" },
                        h("h1", null, "Hotel XYZ"),
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.")),
                h("div", { class: "fotogalerie" },
                    h("img", { class: "bild", src: getAssetPath(`./assets/${this.image}`), alt: "Haus mit Pool" }),
                    h("p", { class: "hotelBeschreibung" },
                        h("h1", null, "Hotel XYZ"),
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."))),
            h("button", { class: "hotelsLaden" }, "Mehr Hotels Laden")));
    }
};
__decorate([
    Prop()
], MsFotogalerie.prototype, "image", void 0);
MsFotogalerie = __decorate([
    Component({
        tag: 'ms-fotogalerie',
        styleUrl: 'ms-fotogalerie.css',
        assetsDirs: ['assets'],
        shadow: true,
    })
], MsFotogalerie);
export { MsFotogalerie };
