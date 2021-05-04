/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ClDarkmode {
        "dmode": HTMLElement;
        "dmpruefer": number;
    }
    interface ClSuche {
        "checkin": HTMLElement;
        "gaeste": HTMLElement;
        "heute": Date;
        "menuleiste": HTMLElement;
        "ort": HTMLElement;
        "suche": HTMLElement;
        "tageimMonat": number [];
        "textc": string;
        "textg": string;
        "textn": string;
        "texto": string;
        "valueg": number;
        "valuen": number;
        "valueo": string;
        "valuevj": number;
        "valuevm": number;
        "valuevt": number;
    }
    interface LsFooter {
    }
    interface LsNewsletter {
        "img": string;
        "newsletterTitle": string;
    }
    interface LtScrollbutton {
        "title": string;
    }
    interface MsFotogalerie {
        "imgSrc": string;
    }
    interface MsSlideshow {
        "imgSrc": string;
    }
    interface NkButton {
        "appearance": string;
        "text": string;
    }
    interface NkEasteregg {
        "appearance": string;
        "closeIcon": string;
        "header": string;
        "isopen": boolean;
    }
    interface NkFlipcard {
        "imgSrc": string;
    }
    interface NkRezensionen {
    }
}
declare global {
    interface HTMLClDarkmodeElement extends Components.ClDarkmode, HTMLStencilElement {
    }
    var HTMLClDarkmodeElement: {
        prototype: HTMLClDarkmodeElement;
        new (): HTMLClDarkmodeElement;
    };
    interface HTMLClSucheElement extends Components.ClSuche, HTMLStencilElement {
    }
    var HTMLClSucheElement: {
        prototype: HTMLClSucheElement;
        new (): HTMLClSucheElement;
    };
    interface HTMLLsFooterElement extends Components.LsFooter, HTMLStencilElement {
    }
    var HTMLLsFooterElement: {
        prototype: HTMLLsFooterElement;
        new (): HTMLLsFooterElement;
    };
    interface HTMLLsNewsletterElement extends Components.LsNewsletter, HTMLStencilElement {
    }
    var HTMLLsNewsletterElement: {
        prototype: HTMLLsNewsletterElement;
        new (): HTMLLsNewsletterElement;
    };
    interface HTMLLtScrollbuttonElement extends Components.LtScrollbutton, HTMLStencilElement {
    }
    var HTMLLtScrollbuttonElement: {
        prototype: HTMLLtScrollbuttonElement;
        new (): HTMLLtScrollbuttonElement;
    };
    interface HTMLMsFotogalerieElement extends Components.MsFotogalerie, HTMLStencilElement {
    }
    var HTMLMsFotogalerieElement: {
        prototype: HTMLMsFotogalerieElement;
        new (): HTMLMsFotogalerieElement;
    };
    interface HTMLMsSlideshowElement extends Components.MsSlideshow, HTMLStencilElement {
    }
    var HTMLMsSlideshowElement: {
        prototype: HTMLMsSlideshowElement;
        new (): HTMLMsSlideshowElement;
    };
    interface HTMLNkButtonElement extends Components.NkButton, HTMLStencilElement {
    }
    var HTMLNkButtonElement: {
        prototype: HTMLNkButtonElement;
        new (): HTMLNkButtonElement;
    };
    interface HTMLNkEastereggElement extends Components.NkEasteregg, HTMLStencilElement {
    }
    var HTMLNkEastereggElement: {
        prototype: HTMLNkEastereggElement;
        new (): HTMLNkEastereggElement;
    };
    interface HTMLNkFlipcardElement extends Components.NkFlipcard, HTMLStencilElement {
    }
    var HTMLNkFlipcardElement: {
        prototype: HTMLNkFlipcardElement;
        new (): HTMLNkFlipcardElement;
    };
    interface HTMLNkRezensionenElement extends Components.NkRezensionen, HTMLStencilElement {
    }
    var HTMLNkRezensionenElement: {
        prototype: HTMLNkRezensionenElement;
        new (): HTMLNkRezensionenElement;
    };
    interface HTMLElementTagNameMap {
        "cl-darkmode": HTMLClDarkmodeElement;
        "cl-suche": HTMLClSucheElement;
        "ls-footer": HTMLLsFooterElement;
        "ls-newsletter": HTMLLsNewsletterElement;
        "lt-scrollbutton": HTMLLtScrollbuttonElement;
        "ms-fotogalerie": HTMLMsFotogalerieElement;
        "ms-slideshow": HTMLMsSlideshowElement;
        "nk-button": HTMLNkButtonElement;
        "nk-easteregg": HTMLNkEastereggElement;
        "nk-flipcard": HTMLNkFlipcardElement;
        "nk-rezensionen": HTMLNkRezensionenElement;
    }
}
declare namespace LocalJSX {
    interface ClDarkmode {
        "dmode"?: HTMLElement;
        "dmpruefer"?: number;
    }
    interface ClSuche {
        "checkin"?: HTMLElement;
        "gaeste"?: HTMLElement;
        "heute"?: Date;
        "menuleiste"?: HTMLElement;
        "ort"?: HTMLElement;
        "suche"?: HTMLElement;
        "tageimMonat"?: number [];
        "textc"?: string;
        "textg"?: string;
        "textn"?: string;
        "texto"?: string;
        "valueg"?: number;
        "valuen"?: number;
        "valueo"?: string;
        "valuevj"?: number;
        "valuevm"?: number;
        "valuevt"?: number;
    }
    interface LsFooter {
    }
    interface LsNewsletter {
        "img"?: string;
        "newsletterTitle"?: string;
        "onEmailInfo"?: (event: CustomEvent<any>) => void;
        "onEmailInput"?: (event: CustomEvent<any>) => void;
    }
    interface LtScrollbutton {
        "title"?: string;
    }
    interface MsFotogalerie {
        "imgSrc"?: string;
    }
    interface MsSlideshow {
        "imgSrc"?: string;
    }
    interface NkButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface NkEasteregg {
        "appearance"?: string;
        "closeIcon"?: string;
        "header"?: string;
        "isopen"?: boolean;
    }
    interface NkFlipcard {
        "imgSrc"?: string;
    }
    interface NkRezensionen {
    }
    interface IntrinsicElements {
        "cl-darkmode": ClDarkmode;
        "cl-suche": ClSuche;
        "ls-footer": LsFooter;
        "ls-newsletter": LsNewsletter;
        "lt-scrollbutton": LtScrollbutton;
        "ms-fotogalerie": MsFotogalerie;
        "ms-slideshow": MsSlideshow;
        "nk-button": NkButton;
        "nk-easteregg": NkEasteregg;
        "nk-flipcard": NkFlipcard;
        "nk-rezensionen": NkRezensionen;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cl-darkmode": LocalJSX.ClDarkmode & JSXBase.HTMLAttributes<HTMLClDarkmodeElement>;
            "cl-suche": LocalJSX.ClSuche & JSXBase.HTMLAttributes<HTMLClSucheElement>;
            "ls-footer": LocalJSX.LsFooter & JSXBase.HTMLAttributes<HTMLLsFooterElement>;
            "ls-newsletter": LocalJSX.LsNewsletter & JSXBase.HTMLAttributes<HTMLLsNewsletterElement>;
            "lt-scrollbutton": LocalJSX.LtScrollbutton & JSXBase.HTMLAttributes<HTMLLtScrollbuttonElement>;
            "ms-fotogalerie": LocalJSX.MsFotogalerie & JSXBase.HTMLAttributes<HTMLMsFotogalerieElement>;
            "ms-slideshow": LocalJSX.MsSlideshow & JSXBase.HTMLAttributes<HTMLMsSlideshowElement>;
            "nk-button": LocalJSX.NkButton & JSXBase.HTMLAttributes<HTMLNkButtonElement>;
            "nk-easteregg": LocalJSX.NkEasteregg & JSXBase.HTMLAttributes<HTMLNkEastereggElement>;
            "nk-flipcard": LocalJSX.NkFlipcard & JSXBase.HTMLAttributes<HTMLNkFlipcardElement>;
            "nk-rezensionen": LocalJSX.NkRezensionen & JSXBase.HTMLAttributes<HTMLNkRezensionenElement>;
        }
    }
}
