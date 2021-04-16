import {Component,h, Prop, Host} from '@stencil/core';

@Component({
    tag: 'ls-newsletter',
    styleUrl: 'ls-newsletter.css',
    shadow: true
})

export class Newsletter {
    
    @Prop() first: string;
    @Prop() last: string;

    render() {
        return (
          <Host>
              <footer>
                <div class="test">
                    <input>inputfeld 1</input>
                    <input>inputfeld 2</input>
                    <input>mailadresse</input>
                    <button>Zum Newsletter anmelden</button>
                </div>
              </footer>
          </Host>
        )
}
}