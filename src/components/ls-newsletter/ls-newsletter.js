var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, State } from '@stencil/core';
let Newsletter = class Newsletter {
    byClick(event) {
        event.preventDefault();
        console.log(this.email);
        console.log("hallo");
    }
    forChange(e) {
        this.email = e.target.email;
        console.log(this.email);
    }
    render() {
        return (h("div", null,
            h("h2", null, "Melde dich jetzt zu unserem Newsletter an"),
            h("p", null, "LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM"),
            h("form", { onClick: (event) => this.byClick(event) },
                h("label", null,
                    "E-mail Adresse",
                    h("input", { type: "text", value: this.email, onInput: (e) => this.forChange(e) })),
                h("button", { type: "click", value: "Click" }, "Jetzt anmelden"))));
    }
};
__decorate([
    State()
], Newsletter.prototype, "email", void 0);
Newsletter = __decorate([
    Component({
        tag: 'ls-newsletter',
        styleUrl: 'ls-newsletter.css',
        shadow: true
    })
], Newsletter);
export { Newsletter };
