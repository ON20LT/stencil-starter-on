/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MsFotogalerie {
        "image": string;
    }
    interface MsSlideshow {
        "slideshow_eins": string;
    }
}
declare global {
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
        "ms-fotogalerie": HTMLMsFotogalerieElement;
        "ms-slideshow": HTMLMsSlideshowElement;
    }
}
declare namespace LocalJSX {
    interface MsFotogalerie {
        "image"?: string;
    }
    interface MsSlideshow {
        "slideshow_eins"?: string;
    }
    interface IntrinsicElements {
        "ms-fotogalerie": MsFotogalerie;
        "ms-slideshow": MsSlideshow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ms-fotogalerie": LocalJSX.MsFotogalerie & JSXBase.HTMLAttributes<HTMLMsFotogalerieElement>;
            "ms-slideshow": LocalJSX.MsSlideshow & JSXBase.HTMLAttributes<HTMLMsSlideshowElement>;
        }
    }
}
