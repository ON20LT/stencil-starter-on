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
    }
    interface MsFotogalerie {
        "imgSrc": string;
    }
    interface MsSlideshow {
        "imgSrc": string;
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
    interface HTMLElementTagNameMap {
        "cl-darkmode": HTMLClDarkmodeElement;
        "cl-suche": HTMLClSucheElement;
        "ls-footer": HTMLLsFooterElement;
        "ls-newsletter": HTMLLsNewsletterElement;
        "ms-fotogalerie": HTMLMsFotogalerieElement;
        "ms-slideshow": HTMLMsSlideshowElement;
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
        "onEmailInput"?: (event: CustomEvent<any>) => void;
    }
    interface MsFotogalerie {
        "imgSrc"?: string;
    }
    interface MsSlideshow {
        "imgSrc"?: string;
    }
    interface IntrinsicElements {
        "cl-darkmode": ClDarkmode;
        "cl-suche": ClSuche;
        "ls-footer": LsFooter;
        "ls-newsletter": LsNewsletter;
        "ms-fotogalerie": MsFotogalerie;
        "ms-slideshow": MsSlideshow;
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
            "ms-fotogalerie": LocalJSX.MsFotogalerie & JSXBase.HTMLAttributes<HTMLMsFotogalerieElement>;
            "ms-slideshow": LocalJSX.MsSlideshow & JSXBase.HTMLAttributes<HTMLMsSlideshowElement>;
        }
    }
}
