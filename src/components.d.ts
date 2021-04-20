/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LsFootertest {
    }
    interface LsNewsletter {
    }
    interface MsFotogalerie {
        "image": string;
    }
    interface MsSlideshow {
        "slideshow_eins": string;
    }
}
declare global {
    interface HTMLLsFootertestElement extends Components.LsFootertest, HTMLStencilElement {
    }
    var HTMLLsFootertestElement: {
        prototype: HTMLLsFootertestElement;
        new (): HTMLLsFootertestElement;
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
        "ls-footertest": HTMLLsFootertestElement;
        "ls-newsletter": HTMLLsNewsletterElement;
        "ms-fotogalerie": HTMLMsFotogalerieElement;
        "ms-slideshow": HTMLMsSlideshowElement;
    }
}
declare namespace LocalJSX {
    interface LsFootertest {
    }
    interface LsNewsletter {
    }
    interface MsFotogalerie {
        "image"?: string;
    }
    interface MsSlideshow {
        "slideshow_eins"?: string;
    }
    interface IntrinsicElements {
        "ls-footertest": LsFootertest;
        "ls-newsletter": LsNewsletter;
        "ms-fotogalerie": MsFotogalerie;
        "ms-slideshow": MsSlideshow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ls-footertest": LocalJSX.LsFootertest & JSXBase.HTMLAttributes<HTMLLsFootertestElement>;
            "ls-newsletter": LocalJSX.LsNewsletter & JSXBase.HTMLAttributes<HTMLLsNewsletterElement>;
            "ms-fotogalerie": LocalJSX.MsFotogalerie & JSXBase.HTMLAttributes<HTMLMsFotogalerieElement>;
            "ms-slideshow": LocalJSX.MsSlideshow & JSXBase.HTMLAttributes<HTMLMsSlideshowElement>;
        }
    }
}
