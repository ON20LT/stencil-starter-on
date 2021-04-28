var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';
let MsSlideshow = class MsSlideshow {
    constructor() {
        this.slideshow_eins = "hotel.jpg";
    }
    render() {
        return (h(Host, null,
            h("div", { class: "slideshow-wrapper" },
                h("div", { class: "slideshow" },
                    h("img", { class: "Bild", src: getAssetPath(`./assets/${this.slideshow_eins}`), alt: "Haus" }),
                    h("h1", { class: "slideshowText" }, "BeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltextBeispieltext")))));
    }
};
__decorate([
    Prop()
], MsSlideshow.prototype, "slideshow_eins", void 0);
MsSlideshow = __decorate([
    Component({
        tag: 'ms-slideshow',
        styleUrl: 'ms-slideshow.css',
        shadow: true,
        assetsDirs: ['asset'],
    })
], MsSlideshow);
export { MsSlideshow };
