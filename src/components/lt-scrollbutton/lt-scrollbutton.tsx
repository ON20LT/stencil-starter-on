import { Component, Host, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'lt-scrollbutton',
  styleUrl: 'lt-scrollbutton.css',
  shadow: true
})

export class LTscrollbutton {

    @Element() scrollEl : HTMLElement;

    @Prop() title: string;

    button = '';
    showButton = false;

    showButtonHandler () {
        this.showButton = true;
    }



    render () {

        return (
           <Host>
            <button type='button' class='button' onClick={this.showButtonHandler.bind(this)}>{this.title}</button>
           </Host>
       )
    }
}
